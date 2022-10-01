import {Request, Response,  NextFunction} from 'express';
import bcrypt  from 'bcrypt';
import userModel from '../model/userModel';

export const encryptPassword = async (req: Request, res: Response, next: NextFunction) => {
    try{
        if(!req.body.password){ 
            res.send('Password missing');
        } else { 
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
            req.body.password = passwordHash;
            next();        
        }
    } catch (error){
        res.status(500).send('Error auth');
    }
}

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
           throw new Error('Email or password does not exist');
        }

        const result = await userModel.getUser({ email, password });
        const comparePassword = await bcrypt.compare(password, result.password);

        if(comparePassword){
            next();
        } else {
            throw new Error('Password is not valid');
        }
    } catch (error: any) {
        res.status(400).send(error.message);
    }
}

export default { validateUser };