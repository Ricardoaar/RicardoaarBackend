import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule as NestConfigModule } from '@nestjs/config';
import mongoConfig from '@app/config/configs/mongo.config';
import * as joi from 'joi';
import mongoValidations from '@app/config/configs/mongo.validations';
import authConfig from '@app/config/configs/auth.config';
import authValidations from '@app/config/configs/auth.validations';

@Module({
  imports: [NestConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    load: [mongoConfig, authConfig],
    validationSchema: joi.object({ ...mongoValidations, ...authValidations }),
  })],
})


export class ConfigModule {
  static forFeature(config: ConfigFactory) {
    return NestConfigModule.forFeature(config);
  }
}
