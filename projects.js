export const fetchProjects = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
      const posts = await response.json();
      return posts.map((post) => ({
        title: post.title,
        description: post.body,
      }));
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  };


  export const renderProjects = (projects, container) => {
    container.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("p-4", "bg-white", "rounded", "shadow", "hover:shadow-lg", "transition");
      card.innerHTML = `
        <h3 class="text-lg font-semibold">${project.title}</h3>
        <p class="text-gray-600">${project.description}</p>
      `;
      container.appendChild(card);
    });
  };