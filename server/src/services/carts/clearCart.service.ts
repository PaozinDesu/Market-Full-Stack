import { prisma } from '../../lib/prisma';

export class ClearCartService {
  async execute(ip: string) {
    return await prisma.cart.deleteMany({
      where: {
        ip,
      },
    });
  }
}
