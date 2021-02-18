import express from "express";
import posts from "./posts/index.js";
import categories from "./categories/index.js";

const router = express.Router();
const { PORT, HOST } = process.env;

router.use(posts);
router.use(categories);

router.get("/", (req, res) => {
  res.render("newPost", { PORT, HOST });
});

export default router;
