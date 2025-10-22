import { prisma } from '../../lib/prisma';
import { ClearCartService } from '../carts/clearCart.service';
import { GetCartItemsService } from '../carts/getCartItems.service';

export class CreateOrderService {
  async execute(ip: string) {
    const getCartItemsService = new GetCartItemsService();
    const cartItems = await getCartItemsService.execute(ip);

    const createdOrder = await prisma.order.create({
      data: {
        ip,
        status: 'SENT',
        orderItem: {
          createMany: {
            data: cartItems.map((cartItem) => ({
              quantity: cartItem.quantity,
              productId: cartItem.productId,
            })),
          },
        },
      },
    });

    const clearCartService = new ClearCartService();
    await clearCartService.execute(ip);

    return createdOrder;
  }
}
