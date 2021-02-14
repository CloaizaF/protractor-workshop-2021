import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page/personal-information.page';

describe('Open the webpage for automation practice', () => {
  describe('when open the webpage', () => {
    beforeEach(async () => {
      await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    });

    it('then should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Selenium - Automation Practice Form - Tutorialspoint');
    });
  });
});

describe('Fill the form', () => {
  const personalInformationPage: PersonalInformationPage = new personalInformationPage();

  it('then the t-shirt should be bought', async () => {
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });
    await submitButton.submitForm();
  });
});
