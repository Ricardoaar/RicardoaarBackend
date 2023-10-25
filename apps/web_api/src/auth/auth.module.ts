import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongoModule } from '@app/mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { AuthSchema } from '@/web_api/src/auth/entities/auth.model';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@/web_api/src/auth/strategies/local.strategy';
import { JwtStrategy } from '@/web_api/src/auth/strategies/jwt.strategy';
import authConfig from '@app/config/configs/auth.config';
import { ConfigModule } from '@app/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongoModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [authConfig.KEY],
      useFactory: async (jwtConfig: ConfigType<typeof authConfig>) => {
        return ({
          secret: jwtConfig.JWT_SECRET,
          signOptions: {
            expiresIn: +jwtConfig.JWT_EXPIRES_IN_SECONDS * 1000,
          },
        });
      },

    }),
    MongooseModule.forFeature([{
      name: MODELS.AUTH,
      schema: AuthSchema,
    }]), PassportModule.register({ defaultStrategy: 'local' })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtService],
})
export class AuthModule {
}
