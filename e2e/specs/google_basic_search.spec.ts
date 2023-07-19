import {Browser, Page, BrowserContext} from '@playwright/test';
import {test, expect} from '@playwright/test';

import {chromium, webkit, firefox} from "@playwright/test";
import {GoogleMainPage} from "../page-objects/google-main.page";
import {SearchResultsPage} from "../page-objects/search-results.page";


const baseUrl = 'https://google.com';

test.describe('check simple search', () => {
  let browser: Browser;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  })

  test.beforeEach(async () => {

  })

  test.afterAll(async () => {
    await browser.close();
  })

  test('check simple full string search', async ({page}) => {
    const googlePage = new GoogleMainPage(page);
    await googlePage.open(baseUrl);
    await googlePage.acceptCookie.click();
    await test.step('should check full string search', async () => {
      await googlePage.searchField.fill('playwright typescript');
      await googlePage.searchButton.click();
      const searchResultPage = new SearchResultsPage(page);
      await searchResultPage.firstSearchResultLink('https://playwright.dev/docs/test-typescript').waitElementVisible();

    });
  });
});
