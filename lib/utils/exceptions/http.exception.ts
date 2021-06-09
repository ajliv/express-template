export abstract class HttpException extends Error {
    constructor(message: string, public readonly status: number) {
        super(message);
    }
}
