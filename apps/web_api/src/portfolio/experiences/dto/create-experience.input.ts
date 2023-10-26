import { InputType, Int, Field } from '@nestjs/graphql';
import { IExperience } from '@/web_api/src/portfolio/experiences/entities/types';
import { IEntity } from '@/types/model.types';
import { IsMongoId, IsString, MaxLength, MinLength } from 'class-validator';


@InputType()
export class CreateExperienceInput implements Omit<IExperience, '_id'> {

  @IsString()
  @MaxLength(100)
  @MinLength(3)
  @Field(() => String, {
    description: 'Company name',
  })
  company: string;

  @IsString()
  @Field(() => String, {
    description: 'Description of the experience',
  })
  description: string;


  @IsString()
  @Field(() => String, {
    description: 'Title of the experience',
  })
  title: string;

  @IsMongoId({
    each: true,
  })
  @Field(() => [String], { nullable: true })
  skills?: string[];


  @Field(() => Date, {
    description: 'Date of end',
  })
  endDate: Date;


  @Field(() => Date, {
    description: 'Date of start',
  })
  startDate: Date;


}

