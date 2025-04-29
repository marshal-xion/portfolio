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