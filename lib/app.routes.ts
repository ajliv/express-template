import express from 'express';

import * as controller from './app.controller';
import { HEALTHCHECK } from './config';

const routes = express.Router();

routes.get('/', controller.info);
routes.get(HEALTHCHECK, controller.healthCheck);

export default routes;
