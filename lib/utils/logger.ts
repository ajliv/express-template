import winston from 'winston';

import { name, version } from '../../package.json';
import { LOG_LEVEL } from '../config';

export const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
    defaultMeta: {
        package: {
            name,
            version,
        },
    },
});
