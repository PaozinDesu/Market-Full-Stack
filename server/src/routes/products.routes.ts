import { Express, Router } from 'express';
import { CreateProductController } from '../controllers/products/createProduct.controller';
import { GetAllProductsController } from '../controllers/products/getAllProducts.controller';

const router = Router();

router.post('/', new CreateProductController().handle);
router.get('/', new GetAllProductsController().handle);

export function registerProductsRoutes(app: Express) {
  app.use('/products', router);
}
