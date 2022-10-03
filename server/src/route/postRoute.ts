import { Router } from "express";
import postController from "../controller/postController";
import jwt from '../middleware/jwt';

const router = Router();

router.get('/posts', postController.getPostsByUser);
router.get('/posts/:user_id', jwt.validateToken, postController.getPostsByUserId);
router.post('/posts', jwt.validateToken, postController.savePost);
// router.put('/posts/:post_id', jwt.validateToken, postController.modifPost);
router.delete('/posts/:post_id', jwt.validateToken, postController.deletePost);

export default router;