import express from "express";
import { PostsController } from "../../controllers/index.js";
const router = express.Router();

router.get("/post/:id", PostsController.getPostById);
router.get("/posts", PostsController.getPostsByCategoryId);

export default router;
