import { RequestHandler } from 'express';
import morgan from 'morgan';

import { HEALTHCHECK, LOG_FORMAT } from '../../config';
import { logger } from '../logger';

export const httpLogger: RequestHandler = morgan(LOG_FORMAT, {
    skip: (req, res) => {
        if (req.url === HEALTHCHECK) {
            // don't polute http logs with passing healthchecks
            return res.statusCode === 200;
        }
        return false;
    },
    stream: {
        // stream morgan logs through the logger with an http log level
        write: (str) => logger.log('http', str.replace(/\n$/, '')),
    },
});
