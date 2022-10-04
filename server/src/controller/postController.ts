import {Request,Response} from 'express';
import postModel from '../model/postModel'
import iPost from '../model/interface/iPost';
import userModel from '../model/userModel';
import { iUser } from '../model/interface/iUser';

const postController = {       
        getPostsByUserId: async (req: Request,res:Response) =>{
                try{
                        const param = req.params['user_id'];
                        const post: any = await postModel.getPostsByUserId(param);
                        res.json(post);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        getPostsByUser: async (req:Request, res:Response) =>{
                try{
                        const posts: any = await postModel.getPostsByUser();
                        res.json(posts);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        savePost: async (req: Request, res: Response)=>{
                try{
                        const {content, category_id, user_id, ...post}:iPost = req.body;

                        if(!category_id){
                                res.status(400).json({message:'some info is missing'});
                        }

                        const result = await postModel.savePost({content, category_id, user_id});

                         result
                                ? res.status(201).json({ result: result.rows})
                                : res.status(500).send('No se pudo crear una nueva post');
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        // modifPost: async (req: Request,res: Response) => {
        //         try{
        //                 const param = req.params['user_id'];
        //                 const{content, category_id, ...post}: iPost = req.body
                        
        //                 console.dir(req.body)
        //                 const result = await postModel.modifPost({content, category_id, ...posts);

        //                 result
        //                         ? res.status(201).json({ result: result.rows})
        //                         : res.status(500).send('No se pudo modificar la post');
        //         }catch (error: any){
        //                 res.status(400).send(error.message);
        //         }
        // },

        deletePost: async (req:Request,res:Response)=>{
                try{
                    const param = req.params.post_id;
                   
                    const result = await postModel.deletePost(param);
                
                    result
                            ? res.status(201).json({ result: `post deleted with ID: ${param}`})
                            : res.status(500).send('No se pudo borrar la post seleccionada');
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        }
}

export default postController