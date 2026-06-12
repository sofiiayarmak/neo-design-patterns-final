import { IBlock } from "./BlockFactory";
import { SkillsModel } from "../models/ResumeModel";

export class SkillsBlock implements IBlock {
  constructor(private skills: SkillsModel) {}

  render(): HTMLElement {
    const section = document.createElement("section");
    section.className = "resume-section";

    const heading = document.createElement("h2");
    heading.textContent = "Навички";
    section.appendChild(heading);

    const groups: Array<{ label: string; items: string[] }> = [
      { label: "Технічні", items: this.skills.technical },
      { label: "Soft skills", items: this.skills.soft },
    ];

    groups.forEach((group) => {
      const groupEl = document.createElement("div");
      groupEl.className = "skills-group";

      const label = document.createElement("div");
      label.className = "skills-label";
      label.textContent = group.label;

      const tags = document.createElement("div");
      tags.className = "skills-tags";
      group.items.forEach((skill) => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = skill;
        tags.appendChild(tag);
      });

      groupEl.appendChild(label);
      groupEl.appendChild(tags);
      section.appendChild(groupEl);
    });

    return section;
  }
}
