import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderSummary: ElementFinder;
  constructor () {
    this.orderSummary = $('#cart_navigation > button > span');
  }

  public async goToOrderSummary(): Promise<void> {
    await this.orderSummary.click();
  }
}
