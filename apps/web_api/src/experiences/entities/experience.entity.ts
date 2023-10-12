import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IExperience } from '@/web_api/src/experiences/entities/types';

@ObjectType()
export class Experience implements IExperience {

  @Field(() => String, { description: 'Experience' })
  company: string;

  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Description' })
  description: string;

  @Field(() => Int, { description: 'End Date' })
  endDate: Date;

  @Field(() => Int, { description: 'StartDate' })
  startDate: Date;


  @Field(() => Int, { description: 'UpdatedAt' })
  updatedAt: Date;
  @Field(() => Int, { description: 'CreatedAt' })
  createdAt: Date;

}
