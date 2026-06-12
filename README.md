# neo-design-patterns-final

Генератор HTML-резюме з використанням 5 патернів проектування.

1. Патерни

Facade: ResumePage.init() — єдина точка входу, приховує всю складність
Template Method: AbstractImporter.ts + ResumeImporter.ts. Скелет алгоритму: load - validate - map - render.
Factory Method: BlockFactory.ts — createBlock(type, model) інкапсулює створення блоків.
Composite: ExperienceBlock.ts + ProjectBlock.ts — ExperienceBlock містить дочірні ProjectBlock, рекурсивний рендер
Decorator: HighlightDecorator.ts — Додає .highlight до проєктів з isRecent: true без зміни їхньої логіки

2. Запуск
   bash
   npm install
   npm run dev

3. Збірка
   bash
   npm run build
   Результат у папці `dist/`.

4. Як додати новий блок (наприклад, "Certificates")

- Додати тип до `src/models/ResumeModel.ts`:

export interface CertificateModel {
name: string;
issuer: string;
year: string;
}

- Додати поле до ResumeModel:
  certificates?: CertificateModel[];

- Створити `src/blocks/CertificatesBlock.ts`:

import { IBlock } from "./BlockFactory";
import { CertificateModel } from "../models/ResumeModel";

export class CertificatesBlock implements IBlock {
constructor(private certs: CertificateModel[]) {}
render(): HTMLElement {
// ... верстка блоку
}
}

- Додати одну гілку до `BlockFactory.ts`:

case 'certificates':
return new CertificatesBlock(model.certificates ?? []);

- Додати дані до `resume.json` та викликати фабрику у `ResumeImporter.render()`.
