import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { IsMongoId } from 'class-validator';

@InputType()
export class AddSkillInput {
  @IsMongoId()
  @Field(() => String, {
    description: 'Experience ID',
  })
  experienceId: Types.ObjectId;

  @IsMongoId()
  @Field(() => String, {
    description: 'Skill ID',
  })
  skillId: Types.ObjectId;
}