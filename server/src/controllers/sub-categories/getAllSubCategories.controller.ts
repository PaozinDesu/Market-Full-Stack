import { Request, Response } from 'express';
import { GetAllSubCategoriesService } from '../../services/sub-categories/gerAllSubCategories.service';

export class GetAllSubCategoriesController {
  handle = async (_: Request, res: Response) => {
    const service = new GetAllSubCategoriesService();
    const foundSubCategories = await service.execute();

    return res.status(200).json({ result: foundSubCategories });
  };
}
