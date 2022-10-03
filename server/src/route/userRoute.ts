import Router from 'express';
import userController from '../controller/userController';
import admin from '../middleware/admin';
import  {encryptPassword}  from '../middleware/auth';
import jwt from '../middleware/jwt';

const router = Router();

router.get('/admin/users', jwt.validateToken, admin.checkRol, userController.getUsers);
router.post('/users', encryptPassword, userController.saveUser);
router.get('/users/:user_id', jwt.validateToken, userController.getOneUser);
router.put('/admin/users/:user_id', jwt.validateToken, admin.checkRol, userController.modifUser);
router.put('/users/:user_id', jwt.validateToken, userController.modifUser);
router.delete('/admin/users/:user_id', jwt.validateToken, admin.checkRol, userController.deleteUser);

export default router;