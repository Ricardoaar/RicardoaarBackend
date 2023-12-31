import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ISkill } from '@/web_api/src/portfolio/skills/entities/types';
import { Types } from 'mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';

@Schema()
export class Skill implements ISkill {
  @Prop({ required: true })
  name: string;
  @Prop({ required: false })
  fallbackIconUrl?: string;

  @Prop({ required: true, default: Date.now() })
  updatedAt: Date;
  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @Prop({
    required: false,
    ref: MODELS.EXPERIENCES,
  })
  experiences: Types.ObjectId[];

  @Prop({
    required: false,
    ref: MODELS.PROJECTS,
  })
  projects: Types.ObjectId[];

}

export const SkillSchema = SchemaFactory.createForClass(Skill);
