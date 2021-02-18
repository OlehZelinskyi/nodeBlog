// import axios from "axios";
import db from "../../db/index.js";
import utils from "../../utils/index.js";

const getCategories = async () => {
  // return axios.get(`https://jsonplaceholder.typicode.com/posts`);
  await utils.delay(3000);
  return db.categories.find({});
};

export default {
  getCategories,
};
