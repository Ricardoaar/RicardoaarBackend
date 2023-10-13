import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from '@app/mongo';
import { Skill, SkillSchema } from '@/web_api/src/skills/entities/skill.model';

@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: Skill.name,
    schema: SkillSchema,
  }])],
  providers: [SkillsResolver, SkillsService],
})
export class SkillsModule {
}
