import { GetHelloUsecase } from './app.get-hello.usecase';
import { AppService } from '../infra/services';

describe('testing get hello usecase', () => {
  let getHelloUsecase: GetHelloUsecase;
  const appService: AppService = new AppService();
  beforeEach(() => {
    getHelloUsecase = new GetHelloUsecase(appService);
  });

  describe('execute', () => {
    it("should return 'Hello World!'", async () => {
      const response = await getHelloUsecase.execute();
      expect(response).toBe('Hello World!');
    });
  });
});
