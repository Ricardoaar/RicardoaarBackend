import { Module } from '@nestjs/common';
import { MongoModule } from '@app/mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { SkillSchema } from '@/web_api/src/portfolio/skills/entities/skill.model';
import { ExperienceSchema } from '@/web_api/src/portfolio/experiences/entities/experience.model';
import { SkillsResolver } from '@/web_api/src/portfolio/skills/skills.resolver';
import { SkillsService } from '@/web_api/src/portfolio/skills/skills.service';
import { ExperiencesResolver } from '@/web_api/src/portfolio/experiences/experiences.resolver';
import { ExperiencesService } from '@/web_api/src/portfolio/experiences/experiences.service';

@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: MODELS.SKILLS,
    schema: SkillSchema,
  }, {
    name: MODELS.EXPERIENCES,
    schema: ExperienceSchema,
  }])],

  providers: [SkillsResolver, SkillsService, ExperiencesResolver, ExperiencesService],
})
export class PortfolioModule {
}
