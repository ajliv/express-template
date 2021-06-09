import { STATUS_CODES } from 'http';

import { HttpException } from './http.exception';

export const NOT_FOUND_STATUS_CODE = 404;

export class NotFoundException extends HttpException {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        super(STATUS_CODES[NOT_FOUND_STATUS_CODE]!, NOT_FOUND_STATUS_CODE);
    }
}
