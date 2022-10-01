import {Request,Response} from 'express';

const loginController = (req: Request, res: Response) => {
    res.json({ token: req.body.token, role: req.body.role })
}

export default loginController