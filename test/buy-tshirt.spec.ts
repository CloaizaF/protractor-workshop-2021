import { $, browser } from 'protractor';
import { MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage:  PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {

    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(5000));
    await productListPage.goToProductList();
    await(browser.sleep(3000));
    await productAddedModalPage.goToProductAddedModal();
    await summaryStepPage.goToSummaryStep();

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await signInStepPage.goToSignIn();

    await addressStepPage.goToAddressStep();

    await shippingStepPage.goToShippingStep();

    await paymentStepPage.goToPaymentStep();

    await bankPaymentPage.goToBankPayment();

    await orderSummaryPage.goToOrderSummary();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
