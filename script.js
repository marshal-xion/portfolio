import { updateSkills } from "./utils.js";

// Toggle message functionality
const button = document.querySelector("#toggle");
button.addEventListener("click", () => {
  const message = document.querySelector("#home p");
  message.textContent =
    message.textContent === "This is my portfolio."
      ? "Hello, world!"
      : "This is my portfolio.";
});

// Form validation
const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value: name } = document.querySelector("#name");
  const { value: email } = document.querySelector("#email");
  if (name && email) {
    message.textContent = `Thanks, ${name}! We'll email you at ${email}.`;
    message.classList.add("text-green-500");
    form.reset();
  } else {
    message.textContent = "Please fill out all fields.";
    message.classList.add("text-red-500");
  }
});

// Initialize skills list
const skills = ["HTML", "CSS", "JavaScript", "Tailwind"];
const skillsList = document.querySelector("#skills-list");
updateSkills(skills, skillsList);