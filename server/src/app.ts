import express from 'express';
import cors from 'cors'
import connection from './services/database.service'
import { categoryRoute, loginRoute, postRoute, userRoute } from './route';

async function conectingDb() {
    await connection.connect()
}

conectingDb()

const app = express();
app.use(cors())
app.use (express.json())
app.use(express.urlencoded({extended:false}));

app.use(userRoute);
app.use(loginRoute);
app.use(categoryRoute);
app.use(postRoute);

export default app;