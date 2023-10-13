import { Field, Scalar } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
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

@Scalar('MongoObjectId')
export class ObjectIdScalar {
  description = 'Mongo object id scalar type';

  parseValue(value: string) {
    return new ObjectId(value); // value from the client
  }

  serialize(value: ObjectId) {
    return value.toHexString(); // value sent to the client
  }

  parseLiteral(ast: ASTNode) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value); // value from the client query
    }
    return null;
  }
}
