import { Field, Scalar } from '@nestjs/graphql';
import { ASTNode, Kind } from 'graphql/index';

export class IEntity {
  @Field(() => String, {
    description: 'Date of creation',
  })
  createdAt: Date;

  @Field(() => Date, {
    description: 'Date of update',
  })
  updatedAt: Date;
}

