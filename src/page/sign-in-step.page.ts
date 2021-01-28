import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private signinStep: ElementFinder;

  constructor () {
    this.signinStep = $('#SubmitLogin > span');
  }

  public async goToSignIn(): Promise<void> {
    await this.signinStep.click();
  }
}
