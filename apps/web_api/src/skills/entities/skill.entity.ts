import { ObjectType, Field } from '@nestjs/graphql';
import { ISkill } from '@/web_api/src/skills/entities/types';
import { Experience } from '@/web_api/src/experiences/entities/experience.entity';
import { Types } from 'mongoose';

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

}
