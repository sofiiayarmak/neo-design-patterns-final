import { IBlock } from "./BlockFactory";
import { HeaderModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private data: HeaderModel) {}

  render(): HTMLElement {
    const header = document.createElement("header");
    header.className = "resume-header";

    header.innerHTML = `
      <h1>${this.data.name}</h1>
      <div class="title">${this.data.title}</div>
      <div class="contacts">
        <span class="contact-item"> ${this.data.email}</span> 
        <span class="contact-item"> ${this.data.phone}</span>
        <span class="contact-item"> ${this.data.location}</span>
        <span class="contact-item"> ${this.data.linkedin}</span>
      </div>
    `;

    return header;
  }
}
