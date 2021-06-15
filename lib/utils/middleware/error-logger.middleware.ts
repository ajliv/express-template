import { ErrorRequestHandler } from 'express';

import { isHttpException } from '../errors/http.exception';
import { logger } from '../logger';

export const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
    if (isHttpException(err)) {
        logger.debug(err.message, { method: req.method, status: err.status, url: req.url });
    } else {
        logger.error(err.message, { method: req.method, url: req.url });
    }

    next(err);
};
