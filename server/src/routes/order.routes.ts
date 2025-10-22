import { Express, Router } from 'express';
import { CreateOrderController } from '../controllers/orders/createOrder.controller';
import { SimulatePaymentController } from '../controllers/orders/simulatePayment.controller';

const router = Router();

router.post('/', new CreateOrderController().handle);
router.post('/:id/simulate-payment', new SimulatePaymentController().handle);

export function registerOrderRoutes(app: Express) {
  app.use('/orders', router);
}
