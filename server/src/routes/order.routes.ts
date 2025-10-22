import { Express, Router } from 'express';
import { CreateOrderController } from '../controllers/orders/createOrder.controller';

const router = Router();

router.post('/', new CreateOrderController().handle);

export function registerOrderRoutes(app: Express) {
  app.use('/orders', router);
}
