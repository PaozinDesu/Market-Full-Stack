import { UpdateCartItemDto } from '../../dtos/updateCartItem.dto';
import { prisma } from '../../lib/prisma';
import { MaxCartQuantityException } from '../../shared/exceptions/maxCartQuantity.exception';

export class UpdateCartItemService {
  async execute(cartItemId: string, dto: UpdateCartItemDto) {
    if (dto.quantity > 10)
      throw new MaxCartQuantityException('Max quantity is 10!');

    return await prisma.cart.update({
      where: { id: cartItemId },
      data: { quantity: dto.quantity },
    });
  }
}
