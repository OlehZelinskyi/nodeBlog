import axios from "axios";

const getCommentById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
};

const getCommentsByPostId = (postId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
};

const getAllComments = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments`);
};

export default {
  getCommentById,
  getCommentsByPostId,
  getAllComments,
};
