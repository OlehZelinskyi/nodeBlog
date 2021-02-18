import db from "../../db/index.js";
import utils from "../../utils/index.js";
// import axios from "axios";

const getPostById = async (id) => {
  await utils.delay(3000);
  return db.posts.findOne({ $loki: Number(id) });
  // return axios.get(`https://jsonplaceholder.typicode.com/Posts/${id}`);
};

const getPostsByCategoryId = async (categoryId) => {
  await utils.delay(3000);
  return db.posts.find({ categoryId: Number(categoryId) });
  // return axios.get(
  //   `https://jsonplaceholder.typicode.com/Posts?postId=${postId}`
  // );
};

const getAllPosts = async () => {
  await utils.delay(3000);
  return db.posts.find({});
  // return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

const addPost = async (data) => {
  await utils.delay(3000);
  return db.posts.insertOne(data);
};

export default {
  getPostById,
  getPostsByCategoryId,
  getAllPosts,
  addPost,
};
