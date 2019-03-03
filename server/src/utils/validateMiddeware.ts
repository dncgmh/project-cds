import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import BaseError from './baseError';

export enum Type {
  body = 'body',
  headers = 'headers',
  params = 'params',
  query = 'query'
}

export default (dto, type: Type) => (req, res, next): object[] | void => {
  const object = plainToClass(dto, req[type]);
  validate(object).then(errors => {
    if (errors.length) {
      const errorTransformed = errors.map(el => ({
        [el.property]: el.constraints
      }));
      next(new BaseError({ statusCode: 400, errors: errorTransformed }));
    }
    return next();
  });
};
