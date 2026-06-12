import { ResumeModel } from "../models/ResumeModel";
export abstract class AbstractImporter {
  async process(jsonPath: string): Promise<void> {
    const rawData = await this.load(jsonPath);
    this.validate(rawData);
    const model = this.map(rawData);
    this.render(model);
  }

  private async load(jsonPath: string): Promise<unknown> {
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`Не вдалося завантажити файл: ${jsonPath}`);
    }
    return response.json();
  }

  protected abstract validate(data: unknown): void;

  protected abstract map(data: unknown): ResumeModel;

  protected abstract render(model: ResumeModel): void;
}
