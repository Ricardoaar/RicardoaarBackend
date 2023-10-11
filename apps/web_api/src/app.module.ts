import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@app/config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  imports: [ConfigModule, ExperiencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
