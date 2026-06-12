import { IBlock } from "./BlockFactory";
import { ExperienceModel } from "../models/ResumeModel";
import { ProjectBlock } from "./ProjectBlock";

export class ExperienceBlock implements IBlock {
  private children: IBlock[] = [];

  constructor(private experiences: ExperienceModel[]) {
    // Під час ініціалізації будуємо дерево дочірніх компонентів
    experiences.forEach((exp) => {
      exp.projects.forEach((project) => {
        this.children.push(new ProjectBlock(project));
      });
    });
  }

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "resume-section";

    const heading = document.createElement("h2");
    heading.textContent = "Досвід роботи";
    section.appendChild(heading);

    this.experiences.forEach((exp, i) => {
      const item = document.createElement("div");
      item.className = "experience-item";

      const header = document.createElement("div");
      header.className = "experience-header";
      header.innerHTML = `
        <div>
          <div class="company-name">${exp.company}</div>
          <div class="position">${exp.position}</div>
        </div>
        <span class="period">${exp.period}</span>
      `;
      item.appendChild(header);

      const projectsList = document.createElement("div");
      projectsList.className = "projects-list";

      const offset = this.experiences
        .slice(0, i)
        .reduce((acc, e) => acc + e.projects.length, 0);

      exp.projects.forEach((_, j) => {
        projectsList.appendChild(this.children[offset + j].render());
      });

      item.appendChild(projectsList);
      section.appendChild(item);
    });

    return section;
  }
}
