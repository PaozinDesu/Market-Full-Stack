import { Request, Response } from 'express';
import { DeleteCartItemsService } from '../../services/carts/deleteCartItems.service';

export class DeleteCartItemsController {
  handle = async (req: Request, res: Response) => {
    const service = new DeleteCartItemsService();
    const deletedItem = await service.execute(req.params.id);

    return res.status(200).json({ result: deletedItem });
  };
}
