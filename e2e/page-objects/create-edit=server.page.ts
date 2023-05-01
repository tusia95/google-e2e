import BasePage from "../locators/base-page";
import {Button} from "../locators/button";
import {Input} from "../locators/input";
import {Block} from "../locators/block";
import {PaymentFormFrame} from "./page-elements/payment-form-frame";

export class CreateEditServerPage extends BasePage {

  paymentFrame = new PaymentFormFrame(this.page);

  get createServerButton(): Button {
    return new Button(this.page.locator('a[href*="editor"]'))
  }

  get selectLocationForm(): Block {
    return new Block(this.page.locator('[id=location_id]'))
  }

  get sendDataToCreateServerButton(): Button {
    return new Button(this.page.locator('button[type="submit"]'));
  }

  locationRadioButton(location: string): Button {
    return new Button(this.page.locator(`//*[@id="location_id"]//h4/span[contains(text(),"${location}")]`));
  }

  imageRadioButton(image: string): Button {
    return new Button(this.page.locator(`//*[@id="image_id"]//h4[contains(text(),"${image}")]`));
  }

  configurationRadioButton(config: string): Button {
    return new Button(this.page.locator(`//*[@id="flavor_id"]//h4[contains(text(),"${config}")]`));
  }

  authMethodCheckbox(auth: string): Button {
    return new Button(this.page.locator(`//*[@id="auth_methods"]//h4[contains(text(),"${auth}")]`));
  }

  get serverNameField(): Input {
    return new Input(this.page.locator('[name="name"]'));
  }

  get readTermsCheckbox(): Button {
    return new Button(this.page.locator('input[type="checkbox"]'));
  }

  get addCreditCardButton(): Button {
    return new Button(this.page.locator('i[class*="credit-card"]'));
  }

}

