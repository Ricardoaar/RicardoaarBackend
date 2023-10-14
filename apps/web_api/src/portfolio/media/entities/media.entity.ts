import { Field, ObjectType } from '@nestjs/graphql';
import { IMedia } from '@/web_api/src/portfolio/media/entities/types';

@ObjectType()
export class Media implements IMedia {
  @Field(() => String, { description: 'Unique identifier in the database' })
  _id: string;
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Url' })
  url: string;
  @Field(() => String, { description: 'Svg' })
  svg: string;
  @Field(() => Date, {
    description: 'Date of update',
    nullable: true,
  })
  updatedAt: Date;
  @Field(() => Date, {
    description: 'Date of creation',
    nullable: true,
  })
  createdAt: Date;

}
