import {Request,Response} from 'express';

const loginController = (req: Request, res: Response) => {
    res.json({ token: req.body.token, role: req.body.role, user_id: req.body.user_id });
}

export default loginController