export abstract class HttpException extends Error {
    constructor(message: string, public readonly status: number) {
        super(message);
    }
}

export const isHttpException = (err?: unknown): err is HttpException =>
    err instanceof HttpException;
