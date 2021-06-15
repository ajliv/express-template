import { STATUS_CODES } from 'http';

import { HttpException } from './http.exception';

export const BAD_REQUEST_STATUS_CODE = 400;

export class BadRequestException extends HttpException {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    constructor(message = STATUS_CODES[BAD_REQUEST_STATUS_CODE]!) {
        super(message, BAD_REQUEST_STATUS_CODE);
    }
}
