/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ErrorRequestHandler, RequestHandler } from 'express';
// eslint-disable-next-line import/no-unresolved
import type { ParamsDictionary, Query } from 'express-serve-static-core';

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

export const asyncErrorHandler = <
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = Query,
    Locals extends Record<string, any> = Record<string, any>
>(
    handle: ErrorRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
): typeof handle =>
    function wrapAsyncError(err, req, res, next): Promise<void> {
        const fn = handle(err, req, res, next);
        return Promise.resolve(fn).catch(next);
    };
