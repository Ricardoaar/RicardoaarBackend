import { Module } from '@nestjs/common';
import { MongoModule } from '@app/mongo';
import { ExperienceSchema } from '@/web_api/src/experiences/experience.model';
import { ExperiencesController } from '@/web_api/src/experiences/experiences.controller';

@Module({
  imports: [MongoModule, MongoModule.forFeature([{
    name: 'Experience',
    schema: ExperienceSchema,
  }])],
  controllers: [ExperiencesController],
})
export class ExperiencesModule {


}
