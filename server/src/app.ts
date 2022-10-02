import express,{Request,Response} from 'express';
import cors from 'cors'
import connection from './services/database.service'
import { loginRoute, userRoute } from './route';

async function conectingDb() {
    await connection.connect()
}

conectingDb()

const app = express();
app.use(cors())
app.use (express.json())
app.use(express.urlencoded({extended:false}));

app.use(userRoute);
app.use(loginRoute)
app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})


export default app;