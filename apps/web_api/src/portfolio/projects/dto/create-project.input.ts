import { InputType, Field } from '@nestjs/graphql';
import { IProject, IProjectLink } from '@/web_api/src/portfolio/projects/projects.types';

@InputType()
class ProjectLinkInput implements IProjectLink {
  @Field(() => String, { description: 'Project link' })
  link: string;

  @Field(() => String, { description: 'Project link text' })
  text: string;
}

@InputType()
export class CreateProjectInput implements IProject {
  @Field(() => String, { description: 'Project name' })
  name: string;

  @Field(() => String, { description: 'Project name' })
  description: string;

  @Field(() => String, { description: 'Project image' })
  image: string;

  @Field(() => [ProjectLinkInput], { description: 'Project links' })
  links: ProjectLinkInput[];


  @Field(() => [String], { nullable: true })
  skills?: string[];
}
