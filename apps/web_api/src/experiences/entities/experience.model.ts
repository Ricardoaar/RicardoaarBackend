import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IExperience } from '@/web_api/src/experiences/entities/types';
import { MODELS } from '@/web_api/src/experiences/models.contants';
import { ISkill } from '@/web_api/src/skills/entities/types';


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

  @Prop({
    required: false,
    ref: MODELS.SKILLS,
  })
  skills: ISkill[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
ExperienceSchema.index({
  title: 1,
});