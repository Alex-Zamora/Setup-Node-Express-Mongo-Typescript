import mongoose from 'mongoose';
import config from 'config';
import Logger from './logger';

const connectDb = async (): Promise<void> => {
  const dbUri = config.get<string>('dbUri');
  try {
    await mongoose.connect(dbUri);
    Logger.info('Connect to DB 🤙');
  } catch (error) {
    Logger.error(`Error connectDb ${error} 👻`);
  }
}

export default connectDb;