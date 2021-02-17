import express from "express";
import posts from "./posts/index.js";
import categories from "./categories/index.js";

const router = express.Router();

router.use(posts);
router.use(categories);

router.get("/", (req, res) => {
  res.send("Status OK");
});

export default router;
