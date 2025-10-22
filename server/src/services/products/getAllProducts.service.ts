import { prisma } from '../../lib/prisma';

export class GetAllProductsService {
  async execute(page: number, limit: number) {
    const total = await prisma.product.count();
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;
    const take = limit;
    const products = await prisma.product.findMany({
      skip,
      take,
      orderBy: { name: 'asc' },

      include: {
        productCategory: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
        productOption: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    return {
      result: products,
      pagination: { total, page, limit, totalPages },
    };
  }
}
