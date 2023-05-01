import {BaseElement} from "./base-element";
import BasePage from "./base-page";


export class Input extends BaseElement {
  readonly page: BasePage | undefined;


  async fill(value: string) {
    await (await this.element).fill(value);
  }

}