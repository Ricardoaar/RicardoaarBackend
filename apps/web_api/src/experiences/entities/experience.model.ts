import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IExperience } from '@/web_api/src/experiences/entities/types';

@Schema()
export class Experience implements IExperience {
  @Prop()
  company: string;
  @Prop()
  createdAt: Date;
  @Prop()
  description: string;
  @Prop()
  endDate: Date;
  @Prop()
  startDate: Date;
  @Prop()
  title: string;
  @Prop()
  updatedAt: Date;

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
