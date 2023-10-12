import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesResolver } from './experiences.resolver';
import { MongoModule } from '@app/mongo';
import { Experience, ExperienceSchema } from '@/web_api/src/experiences/entities/experience.model';
import { MongooseModule } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/experiences/models.contants';
import { Mongoose } from 'mongoose';


@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: Experience.name,

    schema: ExperienceSchema,
  }])],
  providers: [ExperiencesResolver, ExperiencesService],


})
export class ExperiencesModule {
}
