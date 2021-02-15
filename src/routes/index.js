import express from "express";
import comments from "./comments/index.js";
import posts from "./posts/index.js";

const router = express.Router();

router.use(comments);
router.use(posts);

router.get("/", (req, res) => {
  res.send("Status OK");
});

export default router;
