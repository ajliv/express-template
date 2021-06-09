import serverless from '@vendia/serverless-express';

import app from './lib/app';
import { LOG_LEVEL } from './lib/config';
import { logger } from './lib/utils/logger';

const config = {
    app,
    log: logger,
    logSettings: {
        level: LOG_LEVEL,
    },
};

export const handler = serverless(config);
