import { Field } from '@nestjs/graphql';

export class IModel {
  @Field(() => String, {
    description: 'Date of creation',
  })
  createdAt: Date;

  @Field(() => Date, {
    description: 'Date of update',
  })
  updatedAt: Date;
}