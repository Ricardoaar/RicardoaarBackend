import { registerAs } from '@nestjs/config';

const authConfig = registerAs('auth', () => ({
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN_SECONDS: process.env.JWT_EXPIRES_IN_SECONDS,
}));

export default authConfig;