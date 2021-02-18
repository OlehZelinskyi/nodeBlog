import express from "express";
import { PostsController } from "../../controllers/index.js";
const router = express.Router();

router.get("/post/:id", PostsController.getPostById);
router.get("/posts", PostsController.getPostsByCategoryId);
router.post("/post/new", PostsController.addPost);

export default router;
