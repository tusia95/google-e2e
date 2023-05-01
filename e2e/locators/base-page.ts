import {Page} from "@playwright/test";

export default class BasePage {

  readonly page: Page;

  constructor(page: Page) {
  this.page = page;
}
  async open(url: string) {
    return this.page.goto(url);
  }

  async waitPageUrl(url: string) {
    return this.page.waitForURL(url);
  }


}