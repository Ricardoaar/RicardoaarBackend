import { Module } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { ExperiencesResolver } from './experiences.resolver';
import { MongoModule } from '@app/mongo';
import { ExperienceSchema } from '@/web_api/src/experiences/entities/experience.model';


@Module({
  imports: [MongoModule, MongoModule.forFeature([{
    name: 'Experience',
    schema: ExperienceSchema,
  }])],
  providers: [ExperiencesResolver, ExperiencesService],
})
export class ExperiencesModule {
}
