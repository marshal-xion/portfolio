import { createRoot } from "react-dom/client";
import Skills from "./Skills";
// document.addEventListener("DOMContentLoaded", () => {
//     const rootElement = document.getElementById("react-skills");
//     if (rootElement) {
//       const root = createRoot(rootElement);
//       root.render(<Skills />);
//     } else {
//       console.error("Could not find element with ID 'react-skills'");
//     }
//   });

const root = createRoot(document.getElementById("react-skills"));
root.render(<Skills />);