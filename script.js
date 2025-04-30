import { updateSkills } from "./utils.js";
import { fetchProjects, renderProjects } from "./projects.js";


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


const mockFetch = () => new Promise((resolve) => {
  setTimeout(() => resolve("Data loaded!"), 1000);
});
mockFetch().then((data) => console.log(data));


const mockFetch1 = (success = true) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) resolve("Data loaded with async!");
    else reject("Error fetching data");
  }, 1000);
});
async function loadData() {
  try {
    const data = await mockFetch1(true); // this will resolve
    console.log(data);
/*     const data1 = await mockFetch1(false); // this will reject
    // The following line will not be executed if the previous line throws an error
    console.log(data1); */
  } catch (error) {
    console.error(error);
  }
}
loadData();


/* async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchPosts(); */


/* async function initProjects() {
  const projects = await fetchProjects();
  console.log("Projects:", projects);
}
initProjects(); */

async function initProjects() {
  const projects = await fetchProjects();
  const projectsList = document.querySelector("#projects-list");
  renderProjects(projects, projectsList);
}
initProjects();