import { Request, Response } from 'express';
import { GetCartItemsService } from '../../services/carts/getCartItems.service';

export class GetCartItemsController {
  handle = async (req: Request, res: Response) => {
    const service = new GetCartItemsService();
    const foundItems = await service.execute(req.socket.remoteAddress!);

    return res.status(201).json({ result: foundItems });
  };
}
