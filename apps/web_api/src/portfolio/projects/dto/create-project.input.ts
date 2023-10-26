import { InputType, Field } from '@nestjs/graphql';
import { IProject, IProjectLink } from '@/web_api/src/portfolio/projects/projects.types';
import { IsArray, IsMongoId, IsString, IsUrl, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class ProjectLinkInput implements IProjectLink {
  @IsUrl()
  @Field(() => String, { description: 'Project link' })
  link: string;

  @IsString()
  @MaxLength(500)
  @Field(() => String, { description: 'Project link text' })
  text: string;
}

@InputType()
export class CreateProjectInput implements IProject {
  @Field(() => String, { description: 'Project name' })
  name: string;

  @IsString()
  @MaxLength(1000)
  @Field(() => String, { description: 'Project name' })
  description: string;

  @IsString()
  @Field(() => String, { description: 'Project image' })
  image: string;

  @Field(() => [ProjectLinkInput], { description: 'Project links' })
  @Type(() => ProjectLinkInput)
  @ValidateNested({ each: true })
  links: ProjectLinkInput[];


  @IsMongoId({
    each: true,
  })
  @Field(() => [String], { nullable: true })
  skills?: string[];
}
