import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private productAddedModal: ElementFinder;

  constructor () {
    this.productAddedModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToProductAddedModal(): Promise<void> {
    await this.productAddedModal.click();
  }
}
