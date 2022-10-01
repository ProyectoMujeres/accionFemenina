import { Router } from "express";
import categoryController from "../controller/categoryController";
import admin from '../middleware/admin';
import jwt from '../middleware/jwt';

const router = Router();

router.get('/categories', categoryController.getCategories);
router.get('/categories/:category_id', categoryController.getCategory);
router.post('/admin/categories', jwt.validateToken, admin.checkRol, categoryController.saveCategory)
router.put('/admin/categories/:category_id', jwt.validateToken, admin.checkRol, categoryController.modifCategory)
router.delete('/admin/categories/:category_id', jwt.validateToken, admin.checkRol, categoryController.deleteCategory)

export default router;