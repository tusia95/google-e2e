import {BaseElement} from "./base-element";
import BasePage from "./base-page";


export class Block extends BaseElement {
  readonly page: BasePage | undefined;

  async waitElementVisible() {
    await (await this.element).waitFor({state: "visible"});
  }

}