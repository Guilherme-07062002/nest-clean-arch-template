import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../../infra/services';
import { GetHelloUsecase } from '../../application';

describe('app controller', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [
        GetHelloUsecase,
        {
          provide: AppService,
          useFactory: () => new AppService(),
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('testing handle', () => {
    it('should return "Hello World!"', async () => {
      const response = await appController.getHello();
      expect(response).toBe('Hello World!');
    });
  });
});
