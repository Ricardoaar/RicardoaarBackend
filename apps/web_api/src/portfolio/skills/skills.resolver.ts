import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SkillsService } from './skills.service';
import { Skill } from './entities/skill.entity';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { Types } from 'mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';

@Resolver(() => Skill)
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {
  }

  @Mutation(() => Skill)
  createSkill(@Args('createSkillInput') createSkillInput: CreateSkillInput) {
    return this.skillsService.create(createSkillInput);
  }

  @Query(() => [Skill], { name: 'skills' })
  findAll() {
    return this.skillsService.findAll().populate(MODELS.EXPERIENCES);
  }

  @Query(() => Skill, { name: 'skill' })
  findOne(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.skillsService.findOne(id).populate(MODELS.EXPERIENCES);
  }

  @Mutation(() => Skill)
  updateSkill(@Args('updateSkillInput') updateSkillInput: UpdateSkillInput) {
    return this.skillsService.update(updateSkillInput.id, {
      ...updateSkillInput,
    }).populate(MODELS.EXPERIENCES);
  }

  @Mutation(() => Skill)
  removeSkill(@Args('id', { type: () => Int }) id: number) {
    return this.skillsService.remove(id);
  }
}
