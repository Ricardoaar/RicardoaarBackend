import * as joi from 'joi';

const mongoValidations = {
  URI: joi.string(),
  DB_NAME: joi.string(),
  MONGO_USER: joi.string(),
  MONGO_PASSWORD: joi.string(),
  MONGO_PORT: joi.number().default(27017),
};

export default mongoValidations;