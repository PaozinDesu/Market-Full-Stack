import { prisma } from '../../lib/prisma';

export class GetAllCategoriesService {
  async execute() {
    return await prisma.category.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });
  }
}
