import { SmsModuleModule } from './sms-module.module';

describe('SmsModuleModule', () => {
  let smsModuleModule: SmsModuleModule;

  beforeEach(() => {
    smsModuleModule = new SmsModuleModule();
  });

  it('should create an instance', () => {
    expect(smsModuleModule).toBeTruthy();
  });
});
