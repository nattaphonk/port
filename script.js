const profile = {
  name: "Rudfaan Maimahad",
  handle: "ffaann02",
  github: "https://github.com/ffaann02",
  location: "Bangkok, Thailand",
  bio: "Computer Engineering student at KMUTT",
};

const projects = [
  {
    name: "vad-keyword-voice-home-assistant",
    description: "Public Python repository by Kexitor for a VAD and keyword voice home assistant.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/vad-keyword-voice-home-assistant",
    demo: "",
    featured: true,
  },
  {
    name: "local-ai-assistant-with-tools",
    description: "Public Python repository by Kexitor for a local AI assistant with tools.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/local-ai-assistant-with-tools",
    demo: "",
    featured: true,
  },
  {
    name: "local-tts-server",
    description: "Public Python repository by Kexitor for a local text-to-speech server.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/local-tts-server",
    demo: "",
    featured: true,
  },
  {
    name: "local-audio-recorder-server",
    description: "Public Python repository by Kexitor for a local audio recorder server.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/local-audio-recorder-server",
    demo: "",
    featured: true,
  },
  {
    name: "local-voice-recognition-server",
    description: "Public Python repository by Kexitor for a local voice recognition server.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/local-voice-recognition-server",
    demo: "",
    featured: true,
  },
  {
    name: "simple_theory_knowledge_examination_agent",
    description: "Public Python repository by Kexitor for a simple theory knowledge examination agent.",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/simple_theory_knowledge_examination_agent",
    demo: "",
    featured: true,
  },
  {
    name: "local_news_agent",
    description: "Local News Agent",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/local_news_agent",
    demo: "",
    featured: true,
  },
  {
    name: "HPE_YOLOv7",
    description: "Human pose estimation and classification using YOLOv7",
    language: "Jupyter Notebook",
    stars: 7,
    forks: 1,
    repo: "https://github.com/Kexitor/HPE_YOLOv7",
    demo: "",
    featured: true,
  },
  {
    name: "HPE_Mediapipe",
    description: "Human pose estimation and classification using Mediapipe",
    language: "Python",
    stars: 7,
    forks: 2,
    repo: "https://github.com/Kexitor/HPE_Mediapipe",
    demo: "",
    featured: true,
  },
  {
    name: "HPE_Torchvision",
    description: "Human pose estimation and classification using Torchvision",
    language: "Python",
    stars: 2,
    forks: 0,
    repo: "https://github.com/Kexitor/HPE_Torchvision",
    demo: "",
    featured: true,
  },
  {
    name: "gemini_tg_bot",
    description: "Simple Telegram bot with Gemini API",
    language: "Python",
    stars: 0,
    forks: 0,
    repo: "https://github.com/Kexitor/gemini_tg_bot",
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
