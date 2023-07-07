import { config } from 'dotenv';
config();
import connectDB, { db } from './db';
import logger from './logger';
import { DatabaseError } from './error/db.error';
import { HttpError } from './error/http.error';
import { app } from './app';

export type IError = DatabaseError | HttpError;

const start = async () => {
  const { PORT } = process.env;

  try {
    if (!PORT)
      throw new Error('Missing PORT env. Set it and restart the server');
    await connectDB();

    //Listening for a port
    app.listen(PORT, () => {
      return logger.info(`Server is listening at http://localhost:${PORT}`);
    });
  } catch (error: unknown) {
    logger.error(`Server error at http://localhost:${PORT}`);
    process.exit(1);
  }
};

process.on('exit', async () => {
  await db.disconnect();
  console.log('mongoose disconnected');
});

if (require.main === module) {
  start();
}
