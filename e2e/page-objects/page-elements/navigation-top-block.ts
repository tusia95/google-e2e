import BasePage from "../../locators/base-page";
import {Button} from "../../locators/button";


export class NavigationTopBlock extends BasePage {

  get openAccountMenuButton(): Button {
    return new Button((this.page.locator('nav button span')), 'Open account menu button');
  }

  get logoutButton(): Button {
    return new Button(this.page.locator('[role="presentation"] [type="button"]'));
  }
}

