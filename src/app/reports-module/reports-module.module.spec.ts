import { ReportsModuleModule } from './reports-module.module';

describe('ReportsModuleModule', () => {
  let reportsModuleModule: ReportsModuleModule;

  beforeEach(() => {
    reportsModuleModule = new ReportsModuleModule();
  });

  it('should create an instance', () => {
    expect(reportsModuleModule).toBeTruthy();
  });
});
