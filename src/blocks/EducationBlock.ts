import { IBlock } from "./BlockFactory";
import { EducationModel } from "../models/ResumeModel";

export class EducationBlock implements IBlock {
  constructor(private education: EducationModel[]) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "resume-section";

    const heading = document.createElement("h2");
    heading.textContent = "Освіта";
    section.appendChild(heading);

    this.education.forEach((edu) => {
      const item = document.createElement("div");
      item.className = "education-item";

      item.innerHTML = `
        <div>
          <div class="institution">${edu.institution}</div>
          <div class="degree-field">${edu.degree} · ${edu.field}</div>
        </div>
        <span class="edu-year">${edu.year}</span>
      `;

      section.appendChild(item);
    });

    return section;
  }
}
