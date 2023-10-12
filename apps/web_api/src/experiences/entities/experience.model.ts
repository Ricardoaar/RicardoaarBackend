import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IExperience } from '@/web_api/src/experiences/entities/types';

@Schema()
export class Experience implements IExperience {
  @Prop({
    required: true,
  })
  company: string;

  @Prop({
    required: true,
  })
  description: string;
  @Prop({
    required: true,
  })
  endDate: Date;
  @Prop({
    required: true,
  })
  startDate: Date;
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
