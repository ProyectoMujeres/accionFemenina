import {Request,Response} from 'express';
import categoryModel from '../model/categoryModel'
import iCategory from '../model/interface/iCategory';

const categoryController = {
        getCategories: async (req: Request, res: Response) => {
                try{
                        const result: any = await categoryModel.getCategories();

                        result
                                ? res.status(200).json({ result })
                                : res.status(500).send('There was an error in obtaining the category data');
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },
        
        getCategory: async (req: Request, res: Response) => {
                try{
                        const param = req.params['category_id'];
                        const result: any = await categoryModel.getCategory(param);

                        result
                                ? res.status(200).json({ result })
                                : res.status(500).send(`Failed to get the requested category (${param})`);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        saveCategory: async (req: Request, res: Response) => {
                try{
                        const{type, icon }: iCategory= req.body

                        if(!type|| !icon){
                                res.status(400).json({ message:'Type or icon missing' });
                        }

                        const result = await categoryModel.saveCategory({ type, icon });

                        result
                                ? res.status(200).json({ result: `A new category has been successfully created`, type, icon }) 
                                : res.status(500).send('Failed to create a new category');
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        },

        modifCategory: async (req: Request, res: Response) => {
                try{
                        const result = await categoryModel.modifCategory(req.params.category_id, req.body)
                        console.log(result)
                        result
                                ? res.status(200).json({ result: `Category ${req.params.category_id} has been modified correctly` })
                                : res.status(500).send(`Failed to modify the category ${req.params.category_id}`);
                }catch (error: any){
                        res.status(400).send(error.message);
                }
        },

        deleteCategory: async (req: Request, res: Response) => {
                try{
                    const param = req.params.category_id;
                    const result = await categoryModel.deleteCategory(param);

                    result
                        ? res.status(200).json({ result: `Category ${param} deleted correctly` })
                        : res.status(500).send(`Failed to delete the selected category ${param}`);
                }catch (error: any){
                    res.status(400).send(error.message);
                }
        }
}

export default categoryController;