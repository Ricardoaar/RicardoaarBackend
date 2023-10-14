import { CreateExperienceInput } from './create-experience.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';


@InputType()
export class UpdateExperienceInput extends PartialType(CreateExperienceInput) {
  @Field(() => String)
  _id: Types.ObjectId;
}
