import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter {
  protected validate(data: unknown): void {
    if (typeof data !== "object" || data === null) {
      throw new Error("Дані резюме мають бути об'єктом");
    }
    const required = ["header", "summary", "experience", "education", "skills"];
    for (const key of required) {
      if (!(key in (data as Record<string, unknown>))) {
        throw new Error(`Відсутній обов'язковий блок: "${key}"`);
      }
    }
  }

  protected map(data: unknown): ResumeModel {
    return data as ResumeModel;
  }

  protected render(model: ResumeModel): void {
    const container = document.getElementById("resume-content");
    if (!container) throw new Error("Контейнер #resume-content не знайдено");

    const factory = new BlockFactory();

    const blocks = [
      factory.createBlock("header", model),
      factory.createBlock("summary", model),
      factory.createBlock("experience", model),
      factory.createBlock("education", model),
      factory.createBlock("skills", model),
    ];

    blocks.forEach((block) => {
      container.appendChild(block.render());
    });
  }
}
