import express from 'express';
import request from 'supertest';
import userRoute from '../src/route/userRoute';

const app = express();
app.use(express.json())
app.use(userRoute);

describe('DELETE/user/:id', () => {
    test( "Responds a message 'Selected user was not deleted'", async () => {
        const response = await request(app)
            .delete('/admin/users/28')
        expect(response.status).toBe(500);
    });
});

describe('POST/users', () => {
    test('should return status 200 if post user is  successfully', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'pepe',
                email: 'pepe@mail.com',
                password: '123',
                birthdate: '11-02-1983'
            })
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toContain('application/json');
    });
})

describe('GET/users/:user_id', () => {
    test('should return status 200 if get user by user_id is  successfully', async () => {
        const response = await request(app)
            .get('/users/4')
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toContain('application/json');
    });
})

describe('GET/admin/users', () => {
    test('should return status 500 if get users with admin rol is not successfully', async () => {
        const response = await request(app)
            .get('/admin/users')
        expect(response.status).toEqual(500);
    });
})