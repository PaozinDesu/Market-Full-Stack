import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/orders/createOrder.service';

export class CreateOrderController {
  handle = async (req: Request, res: Response) => {
    const service = new CreateOrderService();
    const createdOrder = service.execute(req.socket.remoteAddress!);

    return res.status(201).json(createdOrder);
  };
}
