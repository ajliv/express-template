import { STATUS_CODES } from 'http';

import { ErrorRequestHandler } from 'express';

import { isHttpException } from './errors/http.exception';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (isHttpException(err)) {
        res.status(err.status);
        res.json({ error: err.message });
    } else {
        res.status(500);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        res.json({ error: STATUS_CODES[500]! });
    }
};
