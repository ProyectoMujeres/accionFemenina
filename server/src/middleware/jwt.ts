import {Request, Response,  NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import userModel from '../model/userModel';
import { config } from '../services/config';

const {secret} = config()

const generateToken = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user = await userModel.getUserByEmail(req.body.email);
        const token = await jwt.sign({ email: user.email}, secret, { expiresIn: '1h', algorithm: 'HS256' });
        console.log(token)
        req.body.token = token;
        req.body.user_id = user.user_id;
        req.body.role= user.role;
        
        next()
    } catch (error: any){
        res.status(400).send("Generate token error");
    }
}

const validateToken= (req: any, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== undefined) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        jwt.verify(req.token, secret, (err: any, decoded: any) => {
            if(err) {
            res.status(403).send("Token unvalid");
            } else {
                req.body.email = decoded.email;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}
  
export default { generateToken, validateToken };