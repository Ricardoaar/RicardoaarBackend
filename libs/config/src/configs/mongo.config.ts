import { registerAs } from '@nestjs/config';

const mongoConfig = registerAs('mongo', () => ({
  URI: process.env.MONGO_URI,
  DB_NAME: process.env.MONGO_DATABASE,
  MONGO_USER: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_PORT: process.env.MONGO_PORT,
}));

export default mongoConfig;