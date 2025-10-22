import { Request, Response } from 'express';
import { UpdateCartItemService } from '../../services/carts/updateCartItems.service';

export class UpdateCartItemsController {
  handle = async (req: Request, res: Response) => {
    const service = new UpdateCartItemService();
    const updateItems = await service.execute(req.params.id, req.body);

    return res.status(201).json({ result: updateItems });
  };
}
