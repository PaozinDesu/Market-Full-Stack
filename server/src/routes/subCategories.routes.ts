import { Express, Router } from 'express';
import { CreateSubCategoryController } from '../controllers/sub-categories/createSubCategory.controller';
import { GetAllSubCategoriesController } from '../controllers/sub-categories/getAllSubCategories.controller';

const router = Router();

router.post('/', new CreateSubCategoryController().handle);
router.get('/', new GetAllSubCategoriesController().handle);

export function registerSubCategoriesRoutes(app: Express) {
  app.use('/sub-categories', router);
}
