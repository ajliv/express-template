import type { RequestHandler } from 'express';

export const healthCheck: RequestHandler = (req, res) => {
    res.status(200);
    res.send('OK');
};

export const info: RequestHandler = (req, res) => {
    res.status(200);
    res.json({ timestamp: new Date().toISOString() });
};
