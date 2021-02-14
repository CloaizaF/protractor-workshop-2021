import { $, ElementFinder } from 'protractor';

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;
  private uploadFileInput: ElementFinder;
  private testFileDownloadLink: ElementFinder;

  constructor () {
    this.firstName = $('#firstname');
  }

  public async fillForm(): Promise<void> {
    await this.firstName.sendKeys();
  }
}
