import { Response, Request, NextFunction } from 'express';
import BaseError from '../../utils/baseError';

export const errorCatch = (req: Request, res: Response, next: NextFunction) => {
  throw new BaseError({ statusCode: 404 });
};

export const errorHandle = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof BaseError) res.status(error.statusCode).json(error);
  else {
    console.log(error);
    res
      .status(500)
      .json(new BaseError({ statusCode: 500, errors: error.stack }));
  }
};
