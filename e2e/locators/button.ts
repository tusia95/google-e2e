import {BaseElement} from "./base-element";
import BasePage from "./base-page";


export class Button extends BaseElement {
  readonly page: BasePage | undefined;


  async click() {
    await (await this.element).scrollIntoViewIfNeeded();
    await (await this.element).click();
  }

  async checkIsElementDisabled() {
    return (await this.element).isDisabled();
  }

  async waitElementIsVisible() {
    return await this.element.waitFor({state: "visible"});
  }
}