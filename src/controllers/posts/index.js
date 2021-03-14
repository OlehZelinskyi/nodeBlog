import { PostsService } from "../../services/index.js";

class PostsController {
  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      const response = await PostsService.getPostById(id);
      const dataToRender = {
        ...response,
        createdAt: response.createdAt.toLocaleString(),
        updatedAt: response.updatedAt.toLocaleString(),
      };
      res.render("post", dataToRender);
    } catch (error) {
      return res.send(error);
    }
  }
  static async getPostsByCategoryId(req, res) {
    try {
      const { categoryId } = req.query;
      let response;

      if (categoryId) {
        response = await PostsService.getPostsByCategoryId(categoryId);
      } else {
        response = await PostsService.getAllPosts();
      }

      response = response.map((article) => ({
        ...article,
        createdAt: article.createdAt.toLocaleString(),
        updatedAt: article.updatedAt.toLocaleString(),
      }));

      res.render("postList", {
        categoryId: categoryId || "All",
        posts: response,
      });
    } catch (error) {
      return res.send(error);
    }
  }
  static async addPost(req, res) {
    const { body: data } = req;
    try {
      const response = await PostsService.addPost(data);
      res.redirect(`../post/${response.id}`);
    } catch (error) {
      res.send(error);
    }
  }
}

export default PostsController;
