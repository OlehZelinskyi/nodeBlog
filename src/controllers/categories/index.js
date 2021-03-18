import { CategoriesService } from '../../services/index.js';

class CategoriesController {
  static async getCategories(req, res) {
    try {
      const response = await CategoriesService.getCategories();
      res.send(response);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default CategoriesController;
