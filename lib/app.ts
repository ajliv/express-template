import express from 'express';
import morgan from 'morgan';

import routes from './app.routes';
import { LOG_FORMAT } from './config';
import { errorHandler, notFoundHandler } from './utils/error-handler';
import { errorLoggerMiddleware } from './utils/error-logger.middleware';
import { logger } from './utils/logger';

const app = express();

// stream morgan logs through the logger with an http log level
export const httpLogger: morgan.StreamOptions = {
    write: (str) => logger.log('http', str.replace(/\n$/, '')),
};

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(LOG_FORMAT, { stream: httpLogger }));

app.use(routes);
app.use(notFoundHandler);
app.use(errorLoggerMiddleware, errorHandler);

export default app;
