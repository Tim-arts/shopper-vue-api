import * as mongoose from 'mongoose';
import constants from '../constants';

export const databaseProviders = [
  {
    provide: constants.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }),
  },
];
