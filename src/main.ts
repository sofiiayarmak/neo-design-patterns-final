import "./styles.css";
import { ResumePage } from "./facade/ResumePage";

const page = new ResumePage();
page.init("/resume.json").catch((err) => {
  console.error("Помилка генерації резюме:", err);
  const container = document.getElementById("resume-content");
  if (container) {
    container.innerHTML = `<p style="color:red;padding:20px;">Помилка: ${err.message}</p>`;
  }
});
