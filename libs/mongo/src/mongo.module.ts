import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ConfigModule } from '@app/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '@app/config/configs/mongo.config';
import { MongoClient } from 'mongodb';

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
  providers: [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (envConfig: ConfigType<typeof mongoConfig>) => {
      const { URI, DB_NAME } = envConfig;
      const client = new MongoClient(URI, {});
      const connection = await client.connect();
      return connection.db(DB_NAME);
    },
    inject: [mongoConfig.KEY],
  },
  ],
  exports: [
    'DATABASE_CONNECTION',
    MongooseModule,
  ],


})
export class MongoModule {
  public static forFeature(models: ModelDefinition[] = [], connectionName: string = ''): any {
    return MongooseModule.forFeature(models, connectionName);
  }
}
