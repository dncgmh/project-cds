import * as morgan from 'morgan';
import chalk from 'chalk';

const logger = morgan(function(tokens, req, res) {
  return `[${chalk.gray(
    tokens['date'](req, res)
  )}] ${chalk.blue(tokens.method(req, res))} ${colorizeStatusCode(res.statusCode)} ${chalk.green(tokens.url(req, res))} ${chalk.red(tokens['response-time'](req, res), 'ms')}`;
});

export default logger;
/**
 *Change color depending on status code
 *
 * @param {Number} statusCode
 */
const colorizeStatusCode = statusCode =>
  statusCode >= 400
    ? chalk.red(statusCode)
    : statusCode >= 300
    ? chalk.greenBright(statusCode)
    : chalk.blue(statusCode);
