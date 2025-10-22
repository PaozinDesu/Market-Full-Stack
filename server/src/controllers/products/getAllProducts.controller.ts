import { Request, Response } from 'express';
import { GetAllProductsService } from '../../services/products/getAllProducts.service';

export class GetAllProductsController {
  handle = async (req: Request, res: Response) => {
    console.log('teste');
    console.log('teste');
    const page = Number.parseInt(req.query.page as string) || 1;
    const limit = Number.parseInt(req.query.limit as string) || 10;

    const service = new GetAllProductsService();
    const foundProducts = await service.execute(page, limit);

    return res.status(200).json(foundProducts);
  };
}
