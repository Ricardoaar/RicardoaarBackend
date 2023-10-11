import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import mongoConfig from '@app/config/configs/mongo.config';
import * as joi from 'joi';
import mongoValidations from '@app/config/configs/mongo.validations';

@Module({
  imports: [NestConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    load: [mongoConfig],
    validationSchema: joi.object({ ...mongoValidations }),
  })],
})


export class ConfigModule {
}
