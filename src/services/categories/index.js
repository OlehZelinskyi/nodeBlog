// @ts-ignore
import db from '../../models/index.cjs';

const getCategories = async () => db.Category.findAll({ raw: true });

export default {
  getCategories,
};
