import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ISkill } from '@/web_api/src/skills/entities/types';
import { IEntity } from '@/types';

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
}
