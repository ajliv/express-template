import { HttpException } from '../http.exception';
import { NotFoundException } from '../not-found.exception';

it('should be an instance of HttpException', () => {
    expect(new NotFoundException()).toBeInstanceOf(HttpException);
});

it('should have a status code of 404', () => {
    expect(new NotFoundException()).toHaveProperty('status', 404);
});

it('should have a message of "Not Found"', () => {
    expect(new NotFoundException()).toHaveProperty('message', 'Not Found');
});
