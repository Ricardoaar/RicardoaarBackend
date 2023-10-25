import * as bcrypt from 'bcrypt';

import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from '@/web_api/src/auth/entities/auth.model';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { JwtService } from '@nestjs/jwt';
import authConfig from '@app/config/configs/auth.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(@InjectModel(MODELS.AUTH) private readonly authModel: Model<Auth>,
              private jwtService: JwtService,
              @Inject(authConfig.KEY) private readonly jwtConfig: ConfigType<typeof authConfig>,
  ) {
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authModel.findOne({ username }, {});


    if (!user || !user.password) {
      return null;
    }
    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
      return null;
    }

    return { username: user.username, id: user._id };
  }

  signJwt(user: any) {
    return {

      jwtToken: this.jwtService.sign({ sub: user }, {
          secret: this.jwtConfig.JWT_SECRET,
        },
      ),
      expiresIn: `${(+this.jwtConfig.JWT_EXPIRES_IN_SECONDS / 60)}m`,
    };
  }
}
