import { Field, InputType } from '@nestjs/graphql';
import { IMedia } from '@/web_api/src/portfolio/media/entities/types';
import { IsString, IsUrl } from 'class-validator';

@InputType()
export class CreateMediaInput implements IMedia {
  @IsString()
  @Field(() => String, { description: 'Name' })
  name: string;

  @IsString()
  @Field(() => String, { description: 'Svg' })
  svg: string;

  @IsUrl()
  @Field(() => String, { description: 'Url' })
  url: string;

}
