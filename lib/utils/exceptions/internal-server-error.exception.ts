import { STATUS_CODES } from 'http';

import { HttpException } from './http.exception';

export const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;

export class InternalServerErrorException extends HttpException {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        super(STATUS_CODES[INTERNAL_SERVER_ERROR_STATUS_CODE]!, INTERNAL_SERVER_ERROR_STATUS_CODE);
    }
}
