import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IExperience } from '@/web_api/src/experiences/entities/types';


@ObjectType()
export class Experience implements IExperience {

  @Field(() => String, { description: 'Unique identifier in the database' })
  _id: String;

  @Field(() => String, { description: 'Experience' })
  company: string;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Description' })
  description: string;

  @Field(() => Date, { description: 'End Date' })
  endDate: Date;

  @Field(() => Date, { description: 'StartDate' })
  startDate: Date;

  @Field(() => Date, {
    description: 'Date of creation',
    nullable: false,
  })
  createdAt: Date;

  @Field(() => Date, {
    description: 'Date of update',
    nullable: false,
  })
  updatedAt: Date;

}
