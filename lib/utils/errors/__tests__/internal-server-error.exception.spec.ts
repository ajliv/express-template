import { HttpException } from '../http.exception';
import { InternalServerErrorException } from '../internal-server-error.exception';

it('should be an instance of HttpException', () => {
    expect(new InternalServerErrorException()).toBeInstanceOf(HttpException);
});

it('should have a status code of 500', () => {
    expect(new InternalServerErrorException()).toHaveProperty('status', 500);
});

it('should have a message of "Internal Server Error"', () => {
    expect(new InternalServerErrorException()).toHaveProperty('message', 'Internal Server Error');
});
