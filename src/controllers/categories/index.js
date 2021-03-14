import { CategoriesService } from "../../services/index.js";

class CategoriesController {
  static async getCategories(req, res) {
    try {
      const response = await CategoriesService.getCategories();
      const dataToRender = response.map((category) => ({
        ...category,
        createdAt: category.createdAt.toLocaleString(),
        updatedAt: category.updatedAt.toLocaleString(),
      }));
      res.render("categoryList", { categories: dataToRender });
    } catch (error) {
      return res.send(error);
    }
  }
}

export default CategoriesController;
