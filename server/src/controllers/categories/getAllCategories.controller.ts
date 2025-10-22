import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../../services/categories/gerAllCategories.service';

export class GetAllCategoriesController {
  handle = async (_: Request, res: Response) => {
    const service = new GetAllCategoriesService();
    const foundCategories = await service.execute();

    return res.status(200).json({ result: foundCategories });
  };
}
