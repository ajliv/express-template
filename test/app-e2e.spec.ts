import request from 'supertest';

import app from '../lib/app';
import { HEALTHCHECK } from '../lib/config';

describe('get index route', () => {
    it('should return 200', async () => {
        const resp = await request(app).get('/');
        expect(resp.statusCode).toBe(200);
    });

    it('should return a json response', async () => {
        const resp = await request(app).get('/');
        expect(resp.header['content-type']).toMatch(/application\/json/);
        expect(resp.body).toHaveProperty('timestamp');
        expect(resp.body).toHaveProperty('name');
        expect(resp.body).toHaveProperty('version');
    });
});

describe('get health check', () => {
    it('should return 200', async () => {
        const resp = await request(app).get(HEALTHCHECK);
        expect(resp.statusCode).toBe(200);
    });
});

describe('route not found', () => {
    it('should return 404', async () => {
        const resp = await request(app).get('/asdf');
        expect(resp.statusCode).toBe(404);
    });

    it('should return json response with error message', async () => {
        const resp = await request(app).get('/asdf');
        expect(resp.header['content-type']).toMatch(/application\/json/);
        expect(resp.body).toHaveProperty('error', 'Not Found');
    });
});
