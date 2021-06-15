import { BadRequestException } from '../bad-request.exception';
import { HttpException } from '../http.exception';

it('should be an instance of HttpException', () => {
    expect(new BadRequestException()).toBeInstanceOf(HttpException);
});

it('should have a status code of 400', () => {
    expect(new BadRequestException()).toHaveProperty('status', 400);
});

it('should have a message', () => {
    expect(new BadRequestException()).toHaveProperty('message', 'Bad Request');
});

it('should accept a custom message', () => {
    expect(new BadRequestException('you messed up')).toHaveProperty('message', 'you messed up');
});
