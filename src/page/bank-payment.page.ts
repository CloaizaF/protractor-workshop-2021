import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor () {
    this.bankPayment = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPayment.click();
  }
}
