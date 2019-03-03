import * as statuses from 'statuses';

interface IError {
  statusCode: number;
  error?: string;
  errors?: object;
}

export default class BaseError extends Error {
  readonly statusCode: number;
  readonly error: string;
  readonly errors: object;
  constructor(IError: IError) {
    super('error');
    this.statusCode = IError.statusCode;
    this.error = IError.error || statuses[IError.statusCode];
    this.errors = IError.errors;
  }
}
