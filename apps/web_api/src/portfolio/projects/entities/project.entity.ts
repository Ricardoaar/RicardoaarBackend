import { ObjectType, Field } from '@nestjs/graphql';
import { IProject, IProjectLink } from '@/web_api/src/portfolio/projects/projects.types';
import { Types } from 'mongoose';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.entity';


@ObjectType()
class ProjectLink implements IProjectLink {
  @Field(() => String, { description: 'Project link' })
  link: string;

  @Field(() => String, { description: 'Project link text' })
  text: string;
}


@ObjectType()
export class Project implements IProject {
  @Field(() => String, { nullable: false })
  _id: Types.ObjectId;

  @Field(() => String, { description: 'Project name' })
  name: string;
  @Field(() => String, { description: 'Project description' })
  description: string;
  @Field(() => String, { description: 'Project image' })
  image: string;

  @Field(() => [ProjectLink], { description: 'Project links' })
  links: ProjectLink[];

  @Field(() => [Skill], { description: 'Project skills' })
  skills?: Skill[];

  @Field(() => Date, { description: 'Project updated at' })
  updatedAt: Date;
  @Field(() => Date, { description: 'Project created at', nullable: true })
  createdAt: Date;
}
