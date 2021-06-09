import express from 'express';

import * as AppController from './app.controller';
import { HEALTHCHECK } from './config';

const routes = express.Router();

routes.get(HEALTHCHECK, AppController.healthCheck);
routes.get('/', AppController.info);

export default routes;
