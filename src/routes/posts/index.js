import express from "express";
import { PostsController } from "../../controllers/index.js";
const router = express.Router();

router.get("/posts", PostsController.getPosts);

export default router;
