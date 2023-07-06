import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose, { Mongoose } from 'mongoose';
import logger from '../logger';

export let db: Mongoose;

const connectDB = async () => {
  try {
    // Creating the mongoDB memory server
    const mongoServer = await MongoMemoryServer.create();
    // Connecting to the mongoDB memory server using mongoose
    db = await mongoose.connect(mongoServer.getUri(), {
      dbName: 'notificationsDB',
    });

    logger.info(`MongoDB Connected: ${db.connection.host}`);
  } catch (error: any) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
