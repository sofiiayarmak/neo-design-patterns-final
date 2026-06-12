import { IBlock } from "../blocks/BlockFactory";

export class HighlightDecorator implements IBlock {
  constructor(private element: HTMLElement) {}

  render(): HTMLElement {
    this.element.classList.add("highlight");
    return this.element;
  }
}
