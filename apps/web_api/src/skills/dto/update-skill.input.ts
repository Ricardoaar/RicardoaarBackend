import { CreateSkillInput } from './create-skill.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { ObjectIdScalar } from '@/types';

@InputType()
export class UpdateSkillInput extends PartialType(CreateSkillInput) {
  @Field(() => String)
  id: string;
}
