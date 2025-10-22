import { CreateCategoryDto } from "../../dtos/createCategory.dto";
import { prisma } from "../../lib/prisma";

export class CreateCategoryService {
  async execute(dto: CreateCategoryDto) {
    return await prisma.category.create({
      data: {
        name: dto.name,
      },
    });
  }
}