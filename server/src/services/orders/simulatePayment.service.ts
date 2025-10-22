import { prisma } from '../../lib/prisma';

export class SimulatePaymentService {
  async execute(id: string) {
    return await prisma.order.update({
      where: { id },
      data: {
        status: 'PAID',
      },
    });
  }
}
