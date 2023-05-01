import {ElementHandle, Locator} from "@playwright/test";

export class BaseElement {
  readonly element: Locator;
  readonly name: string | undefined;

  constructor(element: Locator, name?: string) {
    this.element = element
    this.name = name;
  }

  get getElement(): Locator {
    return this.element;
  }

  get getName(): string|undefined {
    return this.name;
  }
}