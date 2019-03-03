import * as statuses from 'statuses';
import { Response } from 'express';

interface IResponse {
  statusCode: number;
  message?: string;
  data?: object;
}

export default class BaseResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly data: object;
  constructor(IResponse: IResponse) {
    this.statusCode = IResponse.statusCode;
    this.message = IResponse.message || statuses[IResponse.statusCode];
    this.data = IResponse.data;
  }
  json = (res: Response) => res.status(this.statusCode).json(this);
}
