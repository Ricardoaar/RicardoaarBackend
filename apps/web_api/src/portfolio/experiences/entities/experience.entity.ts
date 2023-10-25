import { ObjectType, Field } from '@nestjs/graphql';
import { IExperience } from '@/web_api/src/portfolio/experiences/entities/types';
import { Types } from 'mongoose';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.entity';


@ObjectType()
export class Experience implements IExperience {

  @Field(() => String, { description: 'Unique identifier in the database' })
  _id: string;

  @Field(() => String, { description: 'Experience' })
  company: string;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Description' })
  description: string;

  @Field(() => Date, { description: 'End Date' })
  endDate: Date;

  @Field(() => Date, { description: 'StartDate' })
  startDate: Date;

  @Field(() => Date, {
    description: 'Date of creation',
    nullable: true,
  })
  createdAt?: Date;

  @Field(() => Date, {
    description: 'Date of update',
    nullable: false,
  })
  updatedAt: Date;

  @Field(() => [Skill], { nullable: true })
  skills: Types.ObjectId[];

}
