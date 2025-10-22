import { Request, Response } from 'express';
import { SimulatePaymentService } from '../../services/orders/simulatePayment.service';

export class SimulatePaymentController {
  handle = async (req: Request, res: Response) => {
    const service = new SimulatePaymentService();
    const paidOrder = service.execute(req.params.id);

    return res.status(200).json(paidOrder);
  };
}
