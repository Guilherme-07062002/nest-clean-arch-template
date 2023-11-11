import { Controller, Get } from '@nestjs/common';
import { GetHelloUsecase } from '../../application';

@Controller()
export class AppController {
  constructor(private readonly getHelloUsecase: GetHelloUsecase) {}

  @Get()
  async getHello(): Promise<string> {
    return this.getHelloUsecase.execute();
  }
}
