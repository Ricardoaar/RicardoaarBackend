import { ObjectType, Field } from '@nestjs/graphql';
import { ISkill } from '@/web_api/src/portfolio/skills/entities/types';
import { Experience } from '@/web_api/src/portfolio/experiences/entities/experience.entity';
import { Types } from 'mongoose';
import { Project } from '@/web_api/src/portfolio/projects/entities/project.entity';

@ObjectType()
export class Skill implements ISkill {
  @Field(() => String, { nullable: false })
  _id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  fallbackIconUrl: string;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => [Experience], { nullable: true })
  experiences: Types.ObjectId[];

  @Field(() => [Project], { nullable: true })
  projects: Types.ObjectId[];

}
