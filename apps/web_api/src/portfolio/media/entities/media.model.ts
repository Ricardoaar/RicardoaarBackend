import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IMedia } from '@/web_api/src/portfolio/media/entities/types';


@Schema()
export class MediaModel implements IMedia {

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  svg: string;

  @Prop({
    required: true,
  })
  url: string;

  @Prop({
    required: true,
  })
  createdAt: Date;

  @Prop({
    required: false,
  })
  updatedAt: Date;


}

export const MediaSchema = SchemaFactory.createForClass(MediaModel);
