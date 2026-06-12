import { IBlock } from "./BlockFactory";
import { ProjectModel } from "../models/ResumeModel";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ProjectBlock implements IBlock {
  constructor(private project: ProjectModel) {}

  render(): HTMLElement {
    const card = document.createElement("div");
    card.className = "project-card";

    const techTags = this.project.technologies
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-name">${this.project.name}</div>
      <div class="project-description">${this.project.description}</div>
      <div class="tech-tags">${techTags}</div>
    `;

    if (this.project.isRecent) {
      return new HighlightDecorator(card).render();
    }

    return card;
  }
}
