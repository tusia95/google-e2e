import BasePage from "../locators/base-page";
import {Button} from "../locators/button";
import {NavigationTopBlock} from "./page-elements/navigation-top-block";
import {SideMenu} from "./page-elements/side-menu";

export class DashboardPage extends BasePage {

  navigationBlock = new NavigationTopBlock(this.page);
  sideMenu = new SideMenu(this.page);


}
