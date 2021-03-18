import { PostsService } from '../../services/index.js';

class PostsController {
  static async getPostById(req, res) {
    try {
      const { id } = req.params;
      const response = await PostsService.getPostById(id);

      res.send(response);
    } catch (error) {
      return res.send(error);
    }
  }

  static async getPostsByCategoryId(req, res) {
    try {
      const { categoryId } = req.query;
      let response;

      if (Number.parseInt(categoryId, 10) === 0) {
        response = await PostsService.getAllPosts();
      } else {
        response = await PostsService.getPostsByCategoryId(categoryId);
      }

      res.send(response);
    } catch (error) {
      return res.send(error);
    }
  }

  static async addPost(req, res) {
    const { body: data } = req;
    try {
      const response = await PostsService.addPost(data);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }
}

export default PostsController;
