import BasePage from "../locators/base-page";
import {Button} from "../locators/button";
import {Input} from "../locators/input";

export class LoginPage extends BasePage {

  get allowAllCookieButton(): Button {
    return new Button(this.page.locator('[id*=OptinAllowAll]'))
  }

  get emailInputField(): Input {
    return new Input(this.page.locator('input[type="email"]'), 'Email input field');
  }

  get passwordInputField(): Input {
    return new Input(this.page.locator('input[type="password"]'), 'Password input field');
  }

  get signInButton(): Button {
    return new Button(this.page.locator('button[type="submit"]'), 'Sign in button');
  }

}
