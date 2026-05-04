const profile = {
  name: "Nattaphol Kanittanun",
  handle: "NattapholK",
  github: "https://github.com/NattapholK",
  location: "",
  bio: "Student at Debsirin School | DS140 | Interested in game development, IoT, ML, deep learning, and full stack development",
};

const projects = [
  {
    name: "E-Commerce-Projecttest",
    description: "A TypeScript e-commerce project from NattapholK's public GitHub repositories.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/E-Commerce-Projecttest",
    demo: "",
    featured: true,
  },
  {
    name: "Porchesgt3rs",
    description: "For fun",
    language: "CSS",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Porchesgt3rs",
    demo: "",
    featured: true,
  },
  {
    name: "Turn_Base_formyfuture",
    description: "A ShaderLab game-development repository with turn-based project work.",
    language: "ShaderLab",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Turn_Base_formyfuture",
    demo: "",
    featured: true,
  },
  {
    name: "Starway_Express-Tutorial",
    description: "This is Project for Tutorial",
    language: "C#",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Starway_Express-Tutorial",
    demo: "",
    featured: true,
  },
  {
    name: "Starway_Fallen",
    description: "A ShaderLab game-development repository from NattapholK.",
    language: "ShaderLab",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Starway_Fallen",
    demo: "",
    featured: true,
  },
  {
    name: "checklist-final",
    description: "An HTML checklist final project.",
    language: "HTML",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/checklist-final",
    demo: "",
    featured: true,
  },
  {
    name: "Paint-Analysis-Final",
    description: "A Python paint analysis final project.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Paint-Analysis-Final",
    demo: "",
    featured: true,
  },
  {
    name: "paint_formula_analysis",
    description: "A public paint formula analysis repository.",
    language: "Project",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/paint_formula_analysis",
    demo: "",
    featured: false,
  },
  {
    name: "paint-final",
    description: "A public paint final project repository.",
    language: "Project",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/paint-final",
    demo: "",
    featured: false,
  },
  {
    name: "1Year_Aniversary",
    description: "A CSS project from NattapholK's public repositories.",
    language: "CSS",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/1Year_Aniversary",
    demo: "",
    featured: false,
  },
  {
    name: "Smartfarm-NPK",
    description: "A Python smart farm project related to NPK.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/Smartfarm-NPK",
    demo: "",
    featured: true,
  },
  {
    name: "flappybird",
    description: "A JavaScript Flappy Bird project.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/flappybird",
    demo: "",
    featured: false,
  },
  {
    name: "sprinkler101",
    description: "A C++ sprinkler project connected to IoT-style experimentation.",
    language: "C++",
    stars: 0,
    forks: 0,
    repo: "https://github.com/NattapholK/sprinkler101",
    demo: "",
    featured: true,
  },
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const themeToggle = document.querySelector(".theme-toggle");

function createProjectCard(project) {
  const demoLink = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live demo</a>`
    : "";

  return `
    <li class="project-item">
      <h3 class="project-title">
        <a href="${project.repo}" target="_blank" rel="noreferrer">${project.name}</a>
      </h3>
      <p class="project-meta">
        ${project.language || "Project"} | ${project.stars} star${project.stars === 1 ? "" : "s"} | ${project.forks} fork${project.forks === 1 ? "" : "s"}
      </p>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" rel="noreferrer">Repository</a>
        ${demoLink}
      </div>
    </li>
  `;
}

function renderProjects(filter = "featured") {
  const visibleProjects = projects.filter((project) => {
    if (filter === "all") {
      return true;
    }

    if (filter === "featured") {
      return project.featured;
    }

    return project.language === filter;
  });

  projectGrid.innerHTML = visibleProjects.map(createProjectCard).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

renderProjects();
