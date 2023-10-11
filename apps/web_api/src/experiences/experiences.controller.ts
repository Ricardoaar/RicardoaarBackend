import { Controller, Get } from '@nestjs/common';

@Controller('experiences')
export class ExperiencesController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}