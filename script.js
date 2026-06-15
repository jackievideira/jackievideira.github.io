const content = window.portfolioContent;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element && value) {
    element.textContent = value;
  }
};

const setLink = (id, linkConfig) => {
  const element = document.getElementById(id);
  if (!element || !linkConfig) return;
  element.textContent = linkConfig.label;
  element.href = linkConfig.href;
};

const hydrateHero = () => {
  document.title = `${content.name} | Portfolio`;
  setText("brandName", content.name);
  setText("heroEyebrow", content.title);
  setText("heroTitle", content.headline);
  setText("aboutText", content.about);
  setText("locationText", content.location);
  setText("focusText", content.focus);
  setText("currentRole", content.currentRole);
  setText("contactBlurb", content.contactBlurb);

  const resumeLink = document.getElementById("resumeLink");
  if (content.resumeUrl) {
    resumeLink.href = content.resumeUrl;
  } else {
    resumeLink.removeAttribute("href");
    resumeLink.setAttribute("aria-disabled", "true");
    resumeLink.classList.add("is-disabled");
  }
  setLink("secondaryCta", content.secondaryCta);

  const img = document.getElementById("portraitImg");
  const placeholder = document.getElementById("portraitPlaceholder");
  if (content.portraitSrc && img && placeholder) {
    img.src = content.portraitSrc;
    img.style.display = "block";
    placeholder.style.display = "none";
  }
};


const renderExperience = () => {
  const experienceList = document.getElementById("experienceList");
  experienceList.innerHTML = "";

  content.experience.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item reveal";
    article.innerHTML = `
      <div class="timeline-meta">
        <strong>${item.period}</strong>
        <div>${item.location}</div>
      </div>
      <div>
        <h3>${item.role} <span class="timeline-company">@ ${item.company}</span></h3>
        <p class="timeline-summary">${item.summary}</p>
        <ul class="timeline-highlights">
          ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
      </div>
    `;
    experienceList.appendChild(article);
  });
};

const renderSkills = (activeId = "all") => {
  const skillGrid = document.getElementById("skillGrid");
  skillGrid.innerHTML = "";

  const visibleGroups = activeId === "all"
    ? content.skillGroups
    : content.skillGroups.filter((group) => group.id === activeId);

  visibleGroups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <h3>${group.label}</h3>
      <div class="chip-list">
        ${group.skills.map((skill) => `<span class="chip">${skill}</span>`).join("")}
      </div>
    `;
    skillGrid.appendChild(card);
  });

  observeReveals();
};

const renderSkillFilters = () => {
  const filterRoot = document.getElementById("skillFilters");
  const filters = [{ id: "all", label: "All" }, ...content.skillGroups.map(({ id, label }) => ({ id, label }))];

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${filter.id === "all" ? " is-active" : ""}`;
    button.textContent = filter.label;
    button.dataset.filter = filter.id;
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("is-active"));
      button.classList.add("is-active");
      renderSkills(filter.id);
    });
    filterRoot.appendChild(button);
  });
};

const renderProjects = () => {
  const projectGrid = document.getElementById("projectGrid");
  projectGrid.innerHTML = "";

  content.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card reveal";
    article.innerHTML = `
      <span class="project-type">${project.type}</span>
      <div>
        <h3>${project.title}</h3>
        <p class="project-copy">${project.description}</p>
      </div>
      <div class="project-stack">
        ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
      <p class="project-copy"><strong>Impact:</strong> ${project.impact}</p>
      <div class="project-links">
        ${project.links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
      </div>
    `;
    projectGrid.appendChild(article);
  });
};

const renderContactLinks = () => {
  const contactLinks = document.getElementById("contactLinks");
  contactLinks.innerHTML = "";

  content.contactLinks.forEach((item) => {
    const article = document.createElement("article");
    article.className = "contact-link reveal";
    article.innerHTML = `
      <span>${item.label}</span>
      <a href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>
    `;
    contactLinks.appendChild(article);
  });
};

let revealObserver;

const observeReveals = () => {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
};

const setupThemeToggle = () => {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  };

  let stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {}

  // Default to dark mode when no preference is stored.
  applyTheme(stored === "light" ? "light" : "dark");

  toggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
};

const observeNav = () => {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));
};

hydrateHero();
renderExperience();
renderSkillFilters();
renderSkills();
renderProjects();
renderContactLinks();
setupThemeToggle();
observeReveals();
observeNav();
