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
import { ProjectSchema } from '@/web_api/src/portfolio/projects/entities/project.model';
import { ProjectsService } from '@/web_api/src/portfolio/projects/projects.service';
import { ProjectsResolver } from '@/web_api/src/portfolio/projects/projects.resolver';
import { MediaSchema } from '@/web_api/src/portfolio/media/entities/media.model';
import { MediaResolver } from '@/web_api/src/portfolio/media/media.resolver';
import { MediaService } from '@/web_api/src/portfolio/media/media.service';

@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: MODELS.SKILLS,
    schema: SkillSchema,
  }, {
    name: MODELS.EXPERIENCES,
    schema: ExperienceSchema,
  },
    {
      name: MODELS.PROJECTS,
      schema: ProjectSchema,
    }, {
      name: MODELS.MEDIA,
      schema: MediaSchema,
    }])],
  providers: [
    SkillsResolver, SkillsService,
    ExperiencesResolver, ExperiencesService,
    ProjectsService, ProjectsResolver,
    MediaResolver, MediaService,
  ],
})
export class PortfolioModule {
}
