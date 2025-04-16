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