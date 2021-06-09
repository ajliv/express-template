import { ErrorRequestHandler } from 'express';

import { HttpException } from './exceptions/http.exception';
import { logger } from './logger';

export const errorLoggerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof HttpException) {
        logger.debug(err.message, { method: req.method, status: err.status, url: req.url });
    } else {
        logger.error(err.message, { method: req.method, url: req.url });
    }

    next(err);
};
