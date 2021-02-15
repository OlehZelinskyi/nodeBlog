import { CommentsService } from "../../services/index.js";

class CommentsController {
  static async getCommentById(req, res) {
    try {
      const { id } = req.params;
      const response = await CommentsService.getCommentById(id);

      res.render("comment", response.data);
    } catch (error) {
      return res.send(error);
    }
  }
  static async getCommentsByPostId(req, res) {
    try {
      const { postId } = req.query;
      let response;

      if (postId) {
        response = await CommentsService.getCommentsByPostId(postId);
      } else {
        response = await CommentsService.getAllComments();
      }

      res.render("commentList", {
        postId: postId || "All",
        comments: response.data,
      });
    } catch (error) {
      return res.send(error);
    }
  }
}

export default CommentsController;
