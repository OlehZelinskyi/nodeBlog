// @ts-ignore
import db from '../../models/index.cjs';

const getPostById = async (id) => db.Article.findOne({
  where: { id },
  raw: true,
});

const getPostsByCategoryId = async (categoryId) => db.Article.findAll({
  where: { category_id: categoryId },
  raw: true,
});

const getAllPosts = async () => db.Article.findAll({
  raw: true,
});

const addPost = async (data) => {
  const newlyCreated = await db.Article.create(data);
  return newlyCreated.get({ plain: true });
};

export default {
  getPostById,
  getPostsByCategoryId,
  getAllPosts,
  addPost,
};
