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

  @Field(() => Date, { description: 'End Date' })
  endDate: Date;

  @Field(() => Date, { description: 'StartDate' })
  startDate: Date;

  @Field(() => Date, { description: 'UpdatedAt' })
  updatedAt: Date;
  @Field(() => Date, { description: 'CreatedAt' })
  createdAt: Date;

}
