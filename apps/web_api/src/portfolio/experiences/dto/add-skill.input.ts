import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class AddSkillInput {
  @Field(() => String, {
    description: 'Experience ID',
  })
  experienceId: Types.ObjectId;

  @Field(() => String, {
    description: 'Skill ID',
  })
  skillId: Types.ObjectId;
}