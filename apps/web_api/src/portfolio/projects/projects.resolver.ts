import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.entity';
import { Experience } from '@/web_api/src/portfolio/experiences/entities/experience.entity';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '@/web_api/src/auth/guards/gql-jwt-auth-guard.service';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Project)
  createProject(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectsService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectsService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.findOne(id);
  }

  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Project)
  updateProject(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return this.projectsService.update(updateProjectInput.id, updateProjectInput);
  }


  @UseGuards(GqlJwtAuthGuard)
  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.remove(id);
  }


  @ResolveField(() => [Skill])
  skills(@Parent() project: Project) {
    return this.projectsService.getSkills(project._id);
  }

}
