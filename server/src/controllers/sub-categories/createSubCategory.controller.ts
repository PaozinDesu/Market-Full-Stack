import { Request, Response } from 'express';
import { CreateSubCategoryService } from '../../services/sub-categories/createSubCategory.service';

export class CreateSubCategoryController {
  handle = async (req: Request, res: Response) => {
    const service = new CreateSubCategoryService();
    const createdSubCategory = await service.execute(req.body);

    return res.status(201).json(createdSubCategory);
  };
}
