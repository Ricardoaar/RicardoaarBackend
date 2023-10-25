import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface IAuth {
  username: string;
  password: string;
}

@Schema()
export class Auth implements IAuth {
  @Prop({
    required: true,
    unique: true,
    minlength: 6,
  })
  username: string;


  @Prop({
    required: true,
    minlength: 15,
  })
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);