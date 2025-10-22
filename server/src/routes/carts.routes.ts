import { Express, Router } from 'express';
import { AddItemToCartController } from '../controllers/carts/addItemToCart.controller';
import { DeleteCartItemsController } from '../controllers/carts/deleteCartItems.controller';
import { GetCartItemsController } from '../controllers/carts/getCartItems.controller';
import { UpdateCartItemsController } from '../controllers/carts/updateCartItems.controller';

const router = Router();

router.post('/', new AddItemToCartController().handle);
router.get('/', new GetCartItemsController().handle);
router.put('/:id', new UpdateCartItemsController().handle);
router.delete('/:id', new DeleteCartItemsController().handle);

export function registerCartsRoutes(app: Express) {
  app.use('/carts', router);
}
