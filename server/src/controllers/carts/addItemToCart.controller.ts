import { Request, Response } from 'express';
import { AddItemToCartService } from '../../services/carts/addItemToCart.service';

export class AddItemToCartController {
  handle = async (req: Request, res: Response) => {
    const service = new AddItemToCartService();
    const addedItem = await service.execute({
      ...req.body,
      ip: req.socket.remoteAddress!,
    });

    return res.status(201).json(addedItem);
  };
}
