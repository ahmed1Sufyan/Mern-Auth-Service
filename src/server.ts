import app from './app';
import { Config } from './config';

const starServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1); // when error occur in our program it will exit from the process
    }
};

starServer();
