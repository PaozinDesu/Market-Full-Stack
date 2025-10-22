import { prisma } from '../../lib/prisma';

export class DeleteCartItemsService {
  async execute(cartItemId: string) {
    return await prisma.cart.delete({
      where: {
        id: cartItemId,
      },
    });
  }
}
