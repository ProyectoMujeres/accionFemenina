import {Request, Response,  NextFunction} from 'express';
import userModel from '../model/userModel';

const checkRol = async (req: Request,res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;

        if(!email){
           throw new Error('Email or password does not exist');
        }

        const result = await userModel.getUserByEmail(email);

        if(result && result.role === "admin"){
            
            next();
        } else {
            res.status(403).send("Unauthorized");
        }
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default { checkRol };