import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IExperience } from '@/web_api/src/portfolio/experiences/entities/types';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { Types } from 'mongoose';


@Schema()
export class Experience implements Omit<IExperience, '_id'> {
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
ExperienceSchema.index({
  title: 1,
});