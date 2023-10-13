import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from '@app/mongo';
import { Skill, SkillSchema } from '@/web_api/src/skills/entities/skill.model';
import { MODELS } from '@/web_api/src/experiences/models.contants';

@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: MODELS.SKILLS,
    schema: SkillSchema,
  }])],
  providers: [SkillsResolver, SkillsService],
})
export class SkillsModule {
}
