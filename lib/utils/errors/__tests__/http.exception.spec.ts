import { isHttpException } from '../http.exception';
import { NotFoundException } from '../not-found.exception';

describe('isHttpException', () => {
    it('should check if object is instance of HttpException', () => {
        expect(isHttpException(null)).toBe(false);
        expect(isHttpException()).toBe(false);
        expect(isHttpException({})).toBe(false);
        expect(isHttpException(new Error())).toBe(false);

        expect(isHttpException(new NotFoundException())).toBe(true);
    });
});
