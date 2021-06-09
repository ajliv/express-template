import { STATUS_CODES } from 'http';

import { ErrorRequestHandler, RequestHandler } from 'express';

import { HttpException } from './exceptions/http.exception';
import { NotFoundException } from './exceptions/not-found.exception';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof HttpException) {
        res.status(err.status);
        res.json({ error: err.message });
    } else {
        res.status(500);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        res.json({ error: STATUS_CODES[500]! });
    }
};

export const notFoundHandler: RequestHandler = (req, res, next) => {
    next(new NotFoundException());
};
