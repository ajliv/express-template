import type { RequestHandler } from 'express';

import { name, version } from '../package.json';

export const healthCheck: RequestHandler = (req, res) => {
    res.sendStatus(200);
};

export const info: RequestHandler = (req, res) => {
    res.status(200);
    res.json({
        timestamp: new Date().toISOString(),
        name,
        version,
    });
};
