import app from './lib/app';
import { PORT } from './lib/config';
import { logger } from './lib/utils/logger';

const server = app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
});

function shutdown(signal: NodeJS.Signals) {
    logger.info(`Got ${signal}. Graceful shutdown`);
    server.close(() => {
        logger.info('Goodbye!');
        process.exit(0);
    });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
