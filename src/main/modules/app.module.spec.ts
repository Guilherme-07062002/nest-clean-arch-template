// app.module.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../interface/controllers';
// import { AppService } from '../../infra/services';
import { AppModule } from './app.module';
// import { GetHelloUsecase } from '../../application';

describe('AppModule', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      // controllers: [AppController],
      // providers: [
      //   GetHelloUsecase,
      //   {
      //     provide: AppService,
      //     useFactory: () => new AppService(),
      //   },
      // ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const response = await appController.getHello();
      expect(response).toBe('Hello World!');
    });
  });
});
