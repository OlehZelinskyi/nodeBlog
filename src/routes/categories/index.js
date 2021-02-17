import express from "express";
import { CategoriesController } from "../../controllers/index.js";
const router = express.Router();

router.get("/categories", CategoriesController.getCategories);

export default router;
