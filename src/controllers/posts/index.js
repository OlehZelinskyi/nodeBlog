import { PostsService } from "../../services/index.js";

class PostsController {
  static async getPosts(req, res) {
    try {
      const response = await PostsService.getPosts();

      res.render("postsList", { posts: response.data });
    } catch (error) {
      return res.send(error);
    }
  }
}

export default PostsController;
