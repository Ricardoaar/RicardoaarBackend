import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class ExperienceModel {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: false })
  image: string;
  @Prop({ required: false })
  link: string;
  @Prop({ required: true })
  fromYear: number;
  @Prop({ required: true })
  toYear: number ;
}

export const ExperienceSchema = SchemaFactory.createForClass(ExperienceModel);
