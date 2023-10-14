import { InputType, Field } from '@nestjs/graphql';
import { ISkill } from '@/web_api/src/portfolio/skills/entities/types';


@InputType()
export class CreateSkillInput implements ISkill {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  fallbackIconUrl: string;

  @Field(() => [String], { nullable: true })
  experiences: string[];

  @Field(() => [String], { nullable: true })
  projects: string[];
}
