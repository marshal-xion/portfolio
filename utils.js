export const updateSkills = (skills, listElement) => {
    listElement.innerHTML = "";
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      li.classList.add("p-2", "bg-gray-100", "rounded", "hover:bg-gray-200");
      listElement.appendChild(li);
    });
  };