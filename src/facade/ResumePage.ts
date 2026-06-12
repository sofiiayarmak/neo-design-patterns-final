import { ResumeImporter } from "../importer/ResumeImporter";

export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const importer = new ResumeImporter();
    await importer.process(jsonPath);
  }
}
