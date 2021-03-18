import express from 'express';
import { PostsController } from '../../controllers/index.js';
import { validationMiddlewares as VM } from '../../middlewares/index.js';
import { addPostSchema, getPostByIdSchema, getPostsByCategoryIdSchema } from '../../schemas/index.js';

const router = express.Router();

router.get('/post/:id', VM.validateParams(getPostByIdSchema), PostsController.getPostById);
router.get('/posts', VM.validateQuery(getPostsByCategoryIdSchema), PostsController.getPostsByCategoryId);
router.post('/post/new', VM.validateBody(addPostSchema), PostsController.addPost);

export default router;
