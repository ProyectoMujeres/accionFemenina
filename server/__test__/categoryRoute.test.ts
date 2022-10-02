import express from 'express';
import request from 'supertest';
import categoryRoute from "../src/route/categoryRoute";

const app = express();
app.use(express.json())
app.use(categoryRoute);

describe('GET/categories', ()=>
    test('should return status 200 if get categories is  successfully', async ()=>{
        const response = await request(app)
        .get('/categories')
        expect(response.status).toEqual(200);
    })
)

describe('GET/categories/:categories_id', ()=>
    test('should return status 200 if get categories by category_id is  successfully', async ()=>{
        const response = await request(app)
        .get('/categories/1')
        expect(response.status).toEqual(200);
    })
)

describe("POST/categories", () => {
    test("should return a 500 status when categories cannot be created", async () => {
        const response = await request(app)
            .post('/admin/categories')
            .send({ type: "000000" });
        expect(response.status).toEqual(500);
    }) 
})