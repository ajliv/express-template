import { RequestHandler } from 'express';

import { NotFoundException } from '../errors/not-found.exception';

/**
 * Used to catch all requests that reach this middleware with a 404 error
 */
export const notFound: RequestHandler = (req, res, next) => {
    next(new NotFoundException());
};
