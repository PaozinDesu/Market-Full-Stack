import { Express, Router } from 'express';
import { CreateCategoryController } from '../controllers/categories/createCategory.controller';
import { GetAllCategoriesController } from '../controllers/categories/getAllCategories.controller';

const router = Router();

router.post('/', new CreateCategoryController().handle);
router.get('/', new GetAllCategoriesController().handle);

export function registerCategoriesRoutes(app: Express) {
  app.use('/categories', router);
}
