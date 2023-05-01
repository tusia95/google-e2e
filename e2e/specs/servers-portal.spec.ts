import {Browser, Page, BrowserContext} from '@playwright/test';
import {test, expect} from '@playwright/test';

import {chromium, webkit, firefox} from "@playwright/test";
import {LoginPage} from "../page-objects/login.page";
import {data} from "../data";
import {DashboardPage} from "../page-objects/dashboard.page";
import {CreateEditServerPage} from "../page-objects/create-edit=server.page";

const baseUrl = 'https://portal.servers.com';

test.describe('servers portal personal account ', () => {
  let browser: Browser;
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let createServerPage: CreateEditServerPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  })

  test.beforeEach(async () => {

  })

  test.afterAll(async () => {
    await browser.close();
  })

  test.skip('check login-logout', async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.open(baseUrl);
    await test.step('should login as customer', async () => {
      await loginPage.allowAllCookieButton.click();
      await loginPage.emailInputField.fill(data.customer.email);
      await loginPage.passwordInputField.fill(data.customer.password);
      await loginPage.signInButton.click();
      await page.waitForTimeout(10000);

      await test.step('should logout from personal account', async () => {
        dashboardPage = new DashboardPage(page);
        await dashboardPage.waitPageUrl(`${baseUrl}/dashboard`);
        await dashboardPage.navigationBlock.openAccountMenuButton.click();
        await dashboardPage.navigationBlock.logoutButton.click();
        await loginPage.waitPageUrl(`${baseUrl}/login`);
      });
    });
  });

  test('check order for cloud server', async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.open(baseUrl);
    await test.step('should login as customer', async () => {
      await loginPage.allowAllCookieButton.click();
      await loginPage.emailInputField.fill(data.customer.email);
      await loginPage.passwordInputField.fill(data.customer.password);
      await loginPage.signInButton.click();
      await page.waitForTimeout(10000);
    });

    await test.step('should open form to order custom server', async () => {
      dashboardPage = new DashboardPage(page);
      await dashboardPage.waitPageUrl(`${baseUrl}/dashboard`);
      await dashboardPage.sideMenu.openDropDownMenu('Cloud Servers').click();
      await dashboardPage.sideMenu.clickMenuItem(data.sideMenuLinks.sublinks.createAndManage).click();

      createServerPage = new CreateEditServerPage(page);
      await createServerPage.createServerButton.click();
      await createServerPage.selectLocationForm.waitElementVisible();
    });

    await test.step('should fill form for ordering cloud server', async () => {
      await createServerPage.locationRadioButton('az2').click();
      await createServerPage.imageRadioButton('Debian 11').click();
      await createServerPage.configurationRadioButton('SSD.50').click();

      await createServerPage.authMethodCheckbox('SSH key').click();
      await createServerPage.authMethodCheckbox('Password').click();

      await createServerPage.serverNameField.fill('autotest');
      await createServerPage.sendDataToCreateServerButton.click();
      await createServerPage.waitPageUrl(`${baseUrl}/payment/methods`);

      // await createServerPage.readTermsCheckbox.click();
      expect(await createServerPage.readTermsCheckbox.checkIsElementDisabled()).toBeTruthy();

      await createServerPage.addCreditCardButton.click();
      await createServerPage.paymentFrame.inputCardNumberField.click();
    });
  });
});
