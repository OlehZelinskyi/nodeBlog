import joi from 'joi';

export const getPostByIdSchema = joi.object({
  id: joi.number().min(1).positive().integer(),
});

export const getPostsByCategoryIdSchema = joi.object({
  categoryId: joi.number().min(0).integer(),
});

export const addPostSchema = joi.object({
  title: joi.string().min(5).max(100).required(),
  content: joi.string().min(5).max(1000).required(),
  categoryId: joi.number().min(1).integer().required(),
});
