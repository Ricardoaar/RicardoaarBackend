import { InputType, Int, Field } from '@nestjs/graphql';
import { IExperience } from '@/web_api/src/portfolio/experiences/entities/types';
import { IEntity } from '@/types/model.types';


@InputType()
export class CreateExperienceInput implements Omit<IExperience, '_id'> {

  @Field(() => String, {
    description: 'Company name',
  })
  company: string;

  @Field(() => String, {
    description: 'Description of the experience',
  })
  description: string;
  @Field(() => Date, {
    description: 'Date of end',
  })
  endDate: Date;
  @Field(() => Date, {
    description: 'Date of start',
  })
  startDate: Date;
  @Field(() => String, {
    description: 'Title of the experience',
  })
  title: string;

  @Field(() => [String], { nullable: true })
  skills?: string[];

}

