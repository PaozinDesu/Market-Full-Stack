import { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  handle = (error: any, _: Request, res: Response, __: NextFunction) => {
    return res.status(error.statusCode ?? 500).json(error);
  };
}
