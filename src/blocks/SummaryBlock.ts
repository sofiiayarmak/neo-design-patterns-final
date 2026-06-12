import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private summary: string) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "resume-section";

    section.innerHTML = `
      <h2>Про себе</h2>
      <p class="summary-text">${this.summary}</p>
    `;

    return section;
  }
}
