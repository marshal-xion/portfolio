export const updateSkills = (skills, listElement) => {
    listElement.innerHTML = "";
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      listElement.appendChild(li);
    });
  };
