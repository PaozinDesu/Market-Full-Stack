import { CreateSubCategoryDto } from '../../dtos/createSubCategory.dto';
import { prisma } from '../../lib/prisma';

export class CreateSubCategoryService {
  async execute(dto: CreateSubCategoryDto) {
    return await prisma.subCategory.create({
      data: {
        name: dto.name,
      },
    });
  }
}
