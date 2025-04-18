const greeting = "Welcome to my portfolio!";
console.log(greeting);

const updateHeader = () => {
    const header = document.querySelector("h1");
    header.textContent = "Hi, I'm a Dev!";
  };
  updateHeader();


const button = document.querySelector("#toggle");
button.addEventListener("click", () => {
  const message = document.querySelector("p");
  message.textContent =
    message.textContent === "This is my portfolio."
      ? "Hello, world!"
      : "This is my portfolio.";
});


const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.querySelector("#skills-list");
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});


const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  if (name && email) {
    message.textContent = `Thanks, ${name}! We'll email you at ${email}.`;
    message.classList.add("text-green-500");
    form.reset();
  } else {
    message.textContent = "Please fill out all fields.";
    message.classList.add("text-red-500");
  }
});