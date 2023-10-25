import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from '@/web_api/src/auth/guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }


  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req: Request & { user: any }) {

    return this.authService.signJwt(req.user);
  }

  @Post('register')
  async register(@Request() req: Request & { user: any }) {
    return 'NO AVAILABLE FROM API, MODIFY DATABASE DIRECTLY <Trolling, obviusly i don\'t need more users (:>';
  }
}
