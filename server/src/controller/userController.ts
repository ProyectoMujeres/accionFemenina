import {Request,Response} from 'express';
import {iUser} from '../model/interface/iUser';
import userModel from '../model/userModel';
import jwt from './categoryController'; 

const userController = {
    saveUser: async (req: Request, res: Response) => {
        try{
            const {name, email, password, birthdate, role, avatar, ...users}: iUser = req.body;

            if(!name || !email  || !password || !birthdate ){
                res.status(404).send('Name, email, password or birthdate missing');
            }
            
            const result = await userModel.saveUser({ name, email, password, birthdate, role, avatar });

            result
                ? res.status(200).json({ result: `A new user has been successfully created` + result })
                : res.status(500).send('Failed to create a new user');
        } catch (error: any){
            res.status(400).send(error.message);
        }
    },

    getOneUser: async (req: Request, res: Response) => {
        try{
            const param = req.params['user_id'];

            const result: any = await userModel.getOneUser(param);

            result
                ? res.status(200).json({ result })
                : res.status(500).send(`Failed to get the requested user (${param})`);
        } catch (error: any){
            res.status(400).send(error.message);
        }
    },

    getUsers:  async (req: Request, res: Response) => {
        try{
            const result: any = await userModel.getUsers();
        
            result
                ? res.status(200).json({ result })
                : res.status(500).send('There was an error in obtaining the data');
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    },

    modifUser: async (req: Request, res: Response) => {
        try{
            const result = await userModel.modifUser(req.params.user_id, req.query);

            result
                ? res.status(200).json({ result: `User ${req.params.user_id} has been modified correctly` })
                : res.status(500).send(`Failed to modify the user ${req.params.user_id}`);
        } catch (error: any){
            res.status(400).send(error.message);
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try{
            const param = req.params.user_id;

            const result = await userModel.deleteUser(param);

            result
                ? res.status(200).json({ result: `User ${param} deleted correctly` })
                : res.status(500).send(`Failed to delete the selected user ${param}`);
            } catch (error: any){
                res.status(400).send(error.message);
            }
    }   
}



export default userController;