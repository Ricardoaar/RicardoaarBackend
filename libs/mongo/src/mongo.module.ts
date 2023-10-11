import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { ConfigType } from '@nestjs/config';
import { ConfigModule } from '@app/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '@app/config/configs/mongo.config';

@Module({
  imports: [ConfigModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [mongoConfig.KEY],
    useFactory: async (configService: ConfigType<typeof mongoConfig>) => {
      return ({
        uri: configService.URI,
        dbName: configService.DB_NAME,
        user: configService.MONGO_USER,
        pass: configService.MONGO_PASSWORD,
      });
    },
  })],

})
export class MongoModule {
  public static forFeature(models: ModelDefinition[] = [], connectionName: string = ''): any {
    return MongooseModule.forFeature(models, connectionName);
  }
}
