import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, InputType } from '@nestjs/graphql';
import { ExperiencesService } from './experiences.service';
import { Experience } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { Types } from 'mongoose';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.model';
import { AddSkillInput } from '@/web_api/src/portfolio/experiences/dto/add-skill.input';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '@/web_api/src/auth/guards/gql-jwt-auth-guard.service';


@Resolver(() => Experience)
export class ExperiencesResolver {
  constructor(private readonly experiencesService: ExperiencesService) {
  }


  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Experience)
  createExperience(@Args('createExperienceInput') createExperienceInput: CreateExperienceInput) {
    return this.experiencesService.create(createExperienceInput);
  }

  @Query(() => [Experience], { name: 'experiences' })
  findAll() {
    return this.experiencesService.findAll();
  }

  @ResolveField(() => [Skill])
  skills(@Parent() experience: Experience) {
    return this.experiencesService.getSkills(experience._id);
  }

  @Query(() => Experience, { name: 'experience' })
  findOne(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.experiencesService.findOne(id);
  }


  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Experience)
  updateExperience(@Args('updateExperienceInput') updateExperienceInput: UpdateExperienceInput) {
    return this.experiencesService.update(updateExperienceInput._id, updateExperienceInput);
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Experience)
  removeExperience(@Args('id', { type: () => Int }) id: number) {
    return this.experiencesService.remove(id);
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Experience)
  addSkill(@Args('addSkillInput') addSkillInput: AddSkillInput) {
    return this.experiencesService.addSkill(addSkillInput.experienceId, addSkillInput.skillId);
  }
}

