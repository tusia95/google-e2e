import {ElementHandle, FrameLocator, Locator} from "@playwright/test";

export class BaseFrame {
  readonly frame: FrameLocator;
  readonly name: string | undefined;

  constructor(frame: FrameLocator, name?: string) {
    this.frame = frame
    this.name = name;
  }

  get getFrame(): FrameLocator {
    return this.frame;
  }

  get getName(): string|undefined {
    return this.name;
  }
}