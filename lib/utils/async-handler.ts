/* eslint-disable @typescript-eslint/no-explicit-any */

import type { RequestHandler } from 'express';
// eslint-disable-next-line import/no-unresolved
import type { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Utility function to wrap async request handlers and catch errors to pass to Express' next function
 */
export const asyncHandler = <
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = Query,
    Locals extends Record<string, any> = Record<string, any>
>(
    handle: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
): typeof handle =>
    function wrapAsync(req, res, next) {
        const fn = handle(req, res, next);
        return Promise.resolve(fn).catch(next);
    };
