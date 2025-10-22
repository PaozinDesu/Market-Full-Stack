import { prisma } from '../../lib/prisma';

export class GetCartItemsService {
  async execute(ip: string) {
    return await prisma.cart.findMany({
      where: {
        ip,
      },
      include: {
        product: {
          select: {
            name: true,
            image: true,
            description: true,
            price: true,
            productOption: true,
          },
        },
      },
    });
  }
}
