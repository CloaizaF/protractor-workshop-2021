import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor () {
    this.paymentStep = $('#form > p > button > span');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.paymentStep.click();
  }
}
