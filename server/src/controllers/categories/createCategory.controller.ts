import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/categories/createCategory.service';

export class CreateCategoryController {
  handle = async (req: Request, res: Response) => {
    const service = new CreateCategoryService();
    const createdCategory = await service.execute(req.body);

    return res.status(201).json(createdCategory);
  };
}
