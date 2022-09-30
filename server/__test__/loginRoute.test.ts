import express from 'express';
import request from 'supertest';
import {loginRoute} from '../src/route';

const app = express();
app.use(express.json())
app.use(loginRoute);

describe('POST/login', ()=>
    test('when received fields are not correct,should return status 400 ',async ()=>{
        const response = await request(app)
            .post('/login')
            .send ({name:'Ana'})
        expect(response.status).toBe(400);
    })
)

describe("POST/login", () => {
    test('when user and password are correct, should respond with a 200', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                    email: "lau@mail.com",
                    password: "123"
        });
        expect(response.status).toEqual(200);
    })
})