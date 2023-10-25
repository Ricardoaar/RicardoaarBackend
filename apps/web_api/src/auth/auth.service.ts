import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from '@/web_api/src/auth/entities/auth.model';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(MODELS.AUTH) private readonly authModel: Model<Auth>) {
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authModel.findOne({ username }, {
      lean: true,
    });

    if (!user) {
      return null;
    }
    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
      return null;
    }

    return user;
  }


}
