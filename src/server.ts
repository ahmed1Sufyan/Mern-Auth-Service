// import createHttpError from 'http-errors';
// import { HttpError } from 'http-errors';
import app from './app';
import { Config } from './config';
import logger from './config/logger';

const starServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (error: unknown) {
        if (error instanceof Error) logger.error(error.message);
        process.exit(1); // when error occur in our program it will exit from the process
    }
};

starServer();
