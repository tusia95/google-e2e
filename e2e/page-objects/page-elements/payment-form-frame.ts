import BasePage from "../../locators/base-page";
import {Button} from "../../locators/button";
import {Block} from "../../locators/block";
import {BaseFrame} from "../../locators/base-frame";
import {Input} from "../../locators/input";


export class PaymentFormFrame extends BasePage {
 frame = this.page.frameLocator('iframe[class]');


 get inputCardNumberField(): Button {
    return new Button(this.frame.getByPlaceholder('Card number'));
    }
}