import { InputType, Field } from '@nestjs/graphql';
import { ISkill } from '@/web_api/src/portfolio/skills/entities/types';
import { IsMongoId, IsString, MaxLength } from 'class-validator';


@InputType()
export class CreateSkillInput implements ISkill {
  @IsString()
  @MaxLength(30)
  @Field(() => String, { nullable: false })
  name: string;

  @IsString()
  @Field(() => String, { nullable: true })
  fallbackIconUrl: string;

  @IsString()
  @Field(() => [String], { nullable: true })
  experiences: string[];

  @IsMongoId({ each: true })
  @Field(() => [String], { nullable: true })
  projects: string[];
}
