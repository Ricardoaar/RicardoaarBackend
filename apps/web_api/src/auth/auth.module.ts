import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongoModule } from '@app/mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { AuthSchema } from '@/web_api/src/auth/entities/auth.model';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '@/web_api/src/auth/strategies/local.strategy';

@Module({
  imports: [MongoModule, MongooseModule.forFeature([{
    name: MODELS.AUTH,
    schema: AuthSchema,
  }]), PassportModule.register({ defaultStrategy: 'local' })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {
}
