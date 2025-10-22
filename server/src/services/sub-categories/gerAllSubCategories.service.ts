import { prisma } from '../../lib/prisma';

export class GetAllSubCategoriesService {
  async execute() {
    return await prisma.subCategory.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });
  }
}
