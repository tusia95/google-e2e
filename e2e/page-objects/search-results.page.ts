import BasePage from "../locators/base-page";
import {Button} from "../locators/button";
import {Input} from "../locators/input";
import {Block} from "../locators/block";

export class SearchResultsPage extends BasePage {

  get searchButton(): Button {
    return new Button(this.page.locator('center:first-child [value*="Google"]'));
  }

  firstSearchResultLink(link: string): Block {
    console.log(`(//*[@data-snf])[1]//a[@href="${link}"]`, 'my link');
    return new Block(this.page.locator(`(//*[@data-snf])[1]//a[@href="${link}"]`));
  }


}
