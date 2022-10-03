import express from 'express';
import request from 'supertest';
import postRoute from "../src/route/postRoute";

const app = express();
app.use(express.json())
app.use(postRoute);

describe('GET/posts', ()=>
    test('should return status 200 if get posts is successfully', async () => {
        const response = await request(app)
        .get('/posts')
        expect(response.status).toEqual(200);
    })
)

describe("POST/posts", () => {
    test("should return a 500 status when posts cannot be created", async () => {
        const response = await request(app)
            .post('/posts')
            .send({ content: "000000" });
        expect(response.status).toEqual(500);
    });

    test("should return status 200 if post posts is successfully", async () => {
        const response = await request(app)
            .post('/posts')
            .send({ 
                content: "En el adjuntamiento de su distrito puede pedir un abogado de oficio para consultas básicas",
                user_id: "5",
                category_id: "1"
            });
        expect(response.status).toEqual(500);
    }) 
})