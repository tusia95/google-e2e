import BasePage from "../../locators/base-page";
import {Button} from "../../locators/button";


export class SideMenu extends BasePage {

  clickMenuItem(link: string): Button {
    return new Button(this.page.locator(`[href*="${link}"]`), `Open side menu item`);
  }

  openDropDownMenu(itemName: string): Button {
    return new Button(this.page.locator(`[title="${itemName}"]`), `Open dropdown in side menu with name ${itemName}`);

  }

}
