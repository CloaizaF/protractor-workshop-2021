import { $, browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage
} from '../src/page';

describe('Open the webpage', () => {

  it('then the webpage should be opened', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then the t-shirt should be bought', async () => {
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(6000));
    await productListPage.goToProductList();
    await (browser.sleep(3000));
    await productAddedModalPage.goToProductAddedModal();
    await summaryStepPage.goToSummaryStep();
  });
});

describe('Sign in in the app', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage();

  it('then the sign in should be done', async () => {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await (browser.sleep(3000));
    await $('#passwd').sendKeys('WorkshopProtractor');
    await signInStepPage.goToSignIn();
  });
});

describe('Select the address', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();

  it('then the address should be selected', async () => {
    await addressStepPage.goToAddressStep();
  });
});

describe('Make the bank payment', () => {
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then the bank payment should be done', async () => {
    await shippingStepPage.goToShippingStep();
    await paymentStepPage.goToPaymentStep();
    await bankPaymentPage.goToBankPayment();
    await orderSummaryPage.goToOrderSummary();
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
