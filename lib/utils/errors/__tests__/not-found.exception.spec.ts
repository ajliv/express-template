import { HttpException } from '../http.exception';
import { NotFoundException } from '../not-found.exception';

it('should be an instance of HttpException', () => {
    expect(new NotFoundException()).toBeInstanceOf(HttpException);
});

it('should hava a status code of 404', () => {
    expect(new NotFoundException()).toHaveProperty('status', 404);
});

it('should hava a message of "Not Found"', () => {
    expect(new NotFoundException()).toHaveProperty('message', 'Not Found');
});
