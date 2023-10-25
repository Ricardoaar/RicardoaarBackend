import * as joi from 'joi';

const authValidations = {
  JWT_SECRET: joi.string().min(16).required(),
  JWT_EXPIRES_IN_SECONDS: joi.number().default(3600).required(),
};

export default authValidations;