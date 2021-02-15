import express from "express";
import { CommentsController } from "../../controllers/index.js";
const router = express.Router();

router.get("/comment/:id", CommentsController.getCommentById);
router.get("/comments", CommentsController.getCommentsByPostId);

export default router;
