import BasePage from "../locators/base-page";
import {Button} from "../locators/button";
import {Input} from "../locators/input";

export class GoogleMainPage extends BasePage {

  get searchField(): Input {
    return new Input(this.page.locator('[jscontroller] [type="search"]'))
  }

  get searchButton(): Button {
    return new Button(this.page.locator('center:first-child [value*="Google"]'));
  }

  get acceptCookie(): Button {
    return new Button(this.page.getByRole('button', { name: 'Accept all' })
      , 'Accept all cookie');
  }

}
