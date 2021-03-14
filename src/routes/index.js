import express from "express";
import posts from "./posts/index.js";
import categories from "./categories/index.js";
import { CategoriesService } from "../services/index.js";

const router = express.Router();
const { PORT, HOST } = process.env;

router.use(posts);
router.use(categories);

router.get(
  "/",
  async (req, res, next) => {
    const _categories = await CategoriesService.getCategories();
    // @ts-ignore
    req.categoriesOptions = _categories;
    next();
  },
  (req, res) => {
    res.render("newPost", {
      PORT,
      HOST,
      // @ts-ignore
      categoriesOptions: req.categoriesOptions,
    });
  }
);

export default router;
