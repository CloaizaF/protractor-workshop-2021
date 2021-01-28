import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private summaryStep: ElementFinder;

  constructor () {
    this.summaryStep = $('.cart_navigation span');
  }

  public async goToSummaryStep(): Promise<void> {
    await this.summaryStep.click();
  }
}
