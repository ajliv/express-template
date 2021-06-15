import express from 'express';

import routes from './app.routes';
import { errorHandler } from './utils/error-handler';
import { errorLogger } from './utils/middleware/error-logger.middleware';
import { httpLogger } from './utils/middleware/http-logger.middleware';
import { notFound } from './utils/middleware/not-found.middleware';

const app = express();

app.set('trust proxy', true);
app.set('x-powered-by', false);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(httpLogger);
app.use(routes, notFound);
app.use(errorLogger, errorHandler);

export default app;
