import { Request, Response } from 'express';
import { CreateProductService } from '../../services/products/createProduct.service';

export class CreateProductController {
  handle = async (req: Request, res: Response) => {
    const service = new CreateProductService();
    const createdProduct = await service.execute(req.body);

    return res.status(201).json(createdProduct);
  };
}
