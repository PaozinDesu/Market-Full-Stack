import { AddItemToCartDto } from '../../dtos/addItemToCart.dto';
import { prisma } from '../../lib/prisma';

export class AddItemToCartService {
  async execute(dto: AddItemToCartDto) {
    return await prisma.cart.create({
      data: {
        ip: dto.ip,
        quantity: dto.quantity,
        productId: dto.productId,
      },
    });
  }
}
