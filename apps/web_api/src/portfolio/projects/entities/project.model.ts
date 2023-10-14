import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IProject, IProjectLink } from '@/web_api/src/portfolio/projects/projects.types';
import { Types } from 'mongoose';
import { ObjectType } from '@nestjs/graphql';

@Schema()
export class Project implements IProject {
  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: [{ type: Object, ref: 'ProjectLink' }] })
  links: IProjectLink[];

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Date, required: true, default: Date.now() })
  updatedAt: Date;

  @Prop({ type: Date, required: true, default: Date.now() })
  createdAt: Date;

}

export const ProjectSchema = SchemaFactory.createForClass(Project);