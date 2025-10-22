import { CreateProductDto } from '../../dtos/createProduct.dto';
import { prisma } from '../../lib/prisma';
import { ConflicException } from '../../shared/exceptions/conflict.exception';

export class CreateProductService {
  async execute(dto: CreateProductDto) {
    const foundProduct = await prisma.product.count({
      where: {
        name: dto.name,
      },
    });

    if (foundProduct > 0) {
      throw new ConflicException('Product already exists!');
    }

    const createdProduct = await prisma.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        price: dto.price,
        image: dto.image,

        productOption: {
          create: dto.options.map((option) => ({
            name: option.name,
          })),
        },

        productCategory: {
          create: dto.categories.map((categoryId) => ({
            category: { connect: { id: categoryId } },
          })),
        },
      },
      include: {
        productOption: true,
        productCategory: true,
      },
    });

    return createdProduct;
  }
}
