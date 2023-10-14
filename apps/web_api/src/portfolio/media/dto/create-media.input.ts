import { Field, InputType } from '@nestjs/graphql';
import { IMedia } from '@/web_api/src/portfolio/media/entities/types';

@InputType()
export class CreateMediaInput implements IMedia {
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Svg' })
  svg: string;

  @Field(() => String, { description: 'Url' })
  url: string;

}
