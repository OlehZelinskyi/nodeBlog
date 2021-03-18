// @ts-ignore
import db from '../../models/index.cjs';

const getPostById = async (id) => db.Article.findByPk(id, {
  attributes: ['id', 'title', 'content'],
  include: [{
    model: db.Category,
    attributes: ['title'],
  }],
});

const getPostsByCategoryId = async (categoryId) => db.Article.findAll({
  where: { categoryId },
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
