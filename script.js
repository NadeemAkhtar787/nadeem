const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const root = document.documentElement;

const portfolioData = {
  heroStats: [
    { value: "20+", label: "Projects completed" },
    { value: "99%", label: "Responsive layouts" },
    { value: "Fast", label: "Performance-first build" }
  ],

  coreSkills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "UI Design",
    "Responsive Design",
    "Accessibility"
  ],

  stats: [
    { value: "3+", label: "Years practicing front-end" },
    { value: "12", label: "Landing pages shipped" },
    { value: "8", label: "Dashboard interfaces" },
    { value: "24h", label: "Average first response" }
  ],

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "CSS Grid",
    "Flexbox",
    "Landing Pages",
    "Dashboards",
    "Animations",
    "Accessibility",
    "Git",
    "Performance Optimization"
  ],

  services: [
    {
      icon: "monitor-smartphone",
      title: "Responsive Websites",
      text: "Pixel-clean layouts that adapt properly across laptop, tablet, and mobile."
    },
    {
      icon: "layout-dashboard",
      title: "Dashboard UI",
      text: "Clear information architecture for admin panels, analytics, and internal tools."
    },
    {
      icon: "rocket",
      title: "Landing Pages",
      text: "Conversion-focused pages that look premium and explain value fast."
    },
    {
      icon: "gauge",
      title: "Performance Cleanup",
      text: "Faster front-end structure, cleaner CSS, and better page loading behavior."
    }
  ],

  projects: [
    {
  title: "SaaS Dashboard UI",
  category: "dashboard",
  thumbType: "live-page",
  previewUrl: "projects/saas-dashboard/index.html",
  description: "A data-heavy interface with clean hierarchy, KPI cards, filters, and charts layout.",
  tags: ["Dashboard", "UI", "Analytics"],
  icon: "bar-chart-3",
  liveLink: "projects/saas-dashboard/index.html",
  codeLink: "https://github.com/yourusername/saas-dashboard"
},
    {
      title: "Agency Landing Page",
      category: "landing",
      thumbType: "live-page",
	  previewUrl: "projects/Agency Landing Page/index.html",
      description: "A modern service website focused on fast scanning, trust signals, and calls to action.",
      tags: ["Landing Page", "Marketing", "Responsive"],
      icon: "panel-top-open",
      liveLink: "projects/Agency Landing Page/index.html",
      codeLink: "https://github.com/yourusername/saas-dashboard"
    },
    {
      title: "Portfolio Website",
      category: "portfolio",
      thumbType: "live-page",
	  previewUrl: "projects/Portfolio Website/index.html",
      description: "A polished portfolio layout with animated sections and strong personal branding.",
      tags: ["Personal Brand", "UI", "Front-End"],
      icon: "briefcase-business",
      liveLink: "projects/Portfolio Website/index.html",
      codeLink: "https://github.com/yourusername/saas-dashboard"
    },
    {
      title: "E-commerce Product Grid",
      category: "ecommerce",
      thumbType: "live-page",
	  previewUrl: "projects/ecommerce/index.html",
      description: "A clean storefront interface with category controls and user-friendly product cards.",
      tags: ["Storefront", "Cards", "Filters"],
      icon: "shopping-bag",
      liveLink: "projects/ecommerce/index.html",
      codeLink: "https://github.com/yourusername/saas-dashboard"
    },
    {
      title: "Startup Waitlist Page",
      category: "landing",
      thumbType: "live-page",
	  previewUrl: "projects/Startup/index.html",
      description: "Focused hero messaging, benefit sections, FAQ flow, and email capture UI.",
      tags: ["Startup", "CTA", "Launch"],
      icon: "megaphone",
      liveLink: "projects/Startup/index.html",
      codeLink: "https://github.com/yourusername/saas-dashboard"
    },
    {
      title: "Team Management Panel",
      category: "dashboard",
      thumbType: "live-page",
	  previewUrl: "projects/management/index.html",
      description: "User cards, status badges, filters, and layout blocks optimized for internal tooling.",
      tags: ["Users", "Admin", "Productivity"],
      icon: "users-round",
      liveLink: "projects/management/index.html",
      codeLink: "https://github.com/yourusername/saas-dashboard"
    }
  ],

  testimonials: [
    {
      name: "Client One",
      role: "Startup Founder",
      quote: "The interface looked sharper, loaded faster, and finally felt like a serious product."
    },
    {
      name: "Client Two",
      role: "Agency Owner",
      quote: "Clear communication, clean code structure, and much better visual consistency than our old site."
    },
    {
      name: "Client Three",
      role: "Small Business",
      quote: "The final landing page was easier to understand and converted better than the previous version."
    }
  ]
};

function initTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  if (themeToggle) {
    const iconName = theme === "dark" ? "sun-medium" : "moon-star";
    const themeIcon = themeToggle.querySelector("[data-lucide]");
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", iconName);
    }
  }

  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderHeroStats() {
  const wrap = document.getElementById("heroStats");
  const coreSkills = document.getElementById("coreSkills");

  if (wrap) {
    wrap.innerHTML = portfolioData.heroStats
      .map(item => `
        <div class="mini-stat">
          <strong>${item.value}</strong>
          <span class="muted">${item.label}</span>
        </div>
      `)
      .join("");
  }

  if (coreSkills) {
    coreSkills.innerHTML = portfolioData.coreSkills
      .map(skill => `<span class="chip">${skill}</span>`)
      .join("");
  }
}

function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid) return;

  statsGrid.innerHTML = portfolioData.stats
    .map(stat => `
      <div class="stat-box">
        <span class="stat-number">${stat.value}</span>
        <span class="muted">${stat.label}</span>
      </div>
    `)
    .join("");
}

function renderSkills() {
  const skillTags = document.getElementById("skillTags");
  const servicesGrid = document.getElementById("servicesGrid");

  if (skillTags) {
    skillTags.innerHTML = portfolioData.skills
      .map(skill => `<span class="tag">${skill}</span>`)
      .join("");
  }

  if (servicesGrid) {
    servicesGrid.innerHTML = portfolioData.services
      .map(service => `
        <article class="service-card fade-up">
          <span class="service-icon">
            <i data-lucide="${service.icon}" class="icon"></i>
          </span>
          <h3>${service.title}</h3>
          <p class="muted">${service.text}</p>
        </article>
      `)
      .join("");
  }
}

function renderProjectFilters() {
  const filterButtons = document.getElementById("filterButtons");
  if (!filterButtons) return;

  const filters = ["all", ...new Set(portfolioData.projects.map(project => project.category))];

  filterButtons.innerHTML = filters
    .map((filter, index) => `
      <button
        class="filter-btn ${index === 0 ? "active" : ""}"
        data-filter="${filter}"
        type="button"
      >
        ${filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
    `)
    .join("");

  filterButtons.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
}

function getProjectLinkAttrs(url) {
  if (!url || url === "#") {
    return `href="#" aria-disabled="true"`;
  }

  return `href="${url}" target="_blank" rel="noopener noreferrer"`;
}

function getProjectThumbnail(project) {
  const type = project.thumbType || project.category;

  if (type === "live-page" && project.previewUrl) {
    return `
      <div class="project-thumb project-thumb-live">
        <div class="thumb-live-shell">
          <div class="thumb-browser-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="thumb-live-viewport">
            <iframe
              src="${project.previewUrl}"
              title="${project.title} preview"
              class="thumb-live-frame"
              loading="lazy"
              tabindex="-1"
            ></iframe>
          </div>
        </div>
      </div>
    `;
  }

  switch (type) {
    case "dashboard":
      return `
        <div class="project-thumb thumb-dashboard">
          <div class="thumb-frame">
            <div class="thumb-topbar"></div>
            <div class="thumb-body">
              <div class="thumb-sidebar"></div>
              <div class="thumb-main">
                <div class="thumb-kpis">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="thumb-chart"></div>
                <div class="thumb-table"></div>
              </div>
            </div>
          </div>
        </div>
      `;

    case "landing":
      return `
        <div class="project-thumb thumb-landing">
          <div class="thumb-frame">
            <div class="thumb-topbar"></div>
            <div class="thumb-main">
              <div class="thumb-hero">
                <div class="thumb-copy">
                  <span class="thumb-line w-70"></span>
                  <span class="thumb-line w-95"></span>
                  <span class="thumb-line w-55"></span>
                  <div class="thumb-btn-row">
                    <span class="thumb-btn"></span>
                    <span class="thumb-btn ghost"></span>
                  </div>
                </div>
                <div class="thumb-visual"></div>
              </div>
              <div class="thumb-section-row">
                <span class="thumb-card"></span>
                <span class="thumb-card"></span>
                <span class="thumb-card"></span>
              </div>
            </div>
          </div>
        </div>
      `;

    case "portfolio":
      return `
        <div class="project-thumb thumb-portfolio">
          <div class="thumb-frame">
            <div class="thumb-topbar"></div>
            <div class="thumb-main">
              <div class="thumb-portfolio-hero">
                <div class="thumb-avatar"></div>
                <div class="thumb-copy">
                  <span class="thumb-line w-65"></span>
                  <span class="thumb-line w-90"></span>
                  <span class="thumb-line w-50"></span>
                </div>
              </div>
              <div class="thumb-card-grid">
                <span class="thumb-card"></span>
                <span class="thumb-card"></span>
                <span class="thumb-card"></span>
                <span class="thumb-card"></span>
              </div>
            </div>
          </div>
        </div>
      `;

    case "ecommerce":
      return `
        <div class="project-thumb thumb-ecommerce">
          <div class="thumb-frame">
            <div class="thumb-topbar"></div>
            <div class="thumb-main">
              <div class="thumb-toolbar-row">
                <span class="thumb-search"></span>
                <span class="thumb-filter"></span>
              </div>
              <div class="thumb-products">
                <span class="thumb-product"></span>
                <span class="thumb-product"></span>
                <span class="thumb-product"></span>
                <span class="thumb-product"></span>
                <span class="thumb-product"></span>
                <span class="thumb-product"></span>
              </div>
            </div>
          </div>
        </div>
      `;

    default:
      return `
        <div class="project-thumb thumb-generic">
          <div class="thumb-frame">
            <div class="thumb-topbar"></div>
            <div class="thumb-main">
              <span class="thumb-line w-80"></span>
              <span class="thumb-line w-60"></span>
              <span class="thumb-card"></span>
              <span class="thumb-card"></span>
            </div>
          </div>
        </div>
      `;
  }
}

function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(project => project.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map(project => `
      <article class="project-card fade-up">
        <div class="project-card-top">
          <span class="badge">
            <i data-lucide="${project.icon}" class="icon"></i>
            ${project.category}
          </span>
        </div>

        ${getProjectThumbnail(project)}

        <h3>${project.title}</h3>
        <p class="muted">${project.description}</p>

        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <div class="project-links">
          <a ${getProjectLinkAttrs(project.liveLink)} class="project-link">
            <i data-lucide="arrow-up-right" class="icon"></i> Live Demo
          </a>
          <a ${getProjectLinkAttrs(project.codeLink)} class="project-link">
            <i data-lucide="github" class="icon"></i> Code
          </a>
        </div>
      </article>
    `)
    .join("");

  refreshIcons();
  observeFadeUp();
}

function renderTestimonials() {
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  if (!testimonialsGrid) return;

  testimonialsGrid.innerHTML = portfolioData.testimonials
    .map(item => `
      <article class="testimonial-card fade-up">
        <span class="badge">
          <i data-lucide="quote" class="icon"></i> Testimonial
        </span>
        <p class="lead">“${item.quote}”</p>
        <h3>${item.name}</h3>
        <p class="muted no-margin">${item.role}</p>
      </article>
    `)
    .join("");
}

function setupThemeToggle() {
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

function setupMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  const menuOpenIcon = document.querySelector(".menu-open-icon");
  const menuCloseIcon = document.querySelector(".menu-close-icon");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    if (menuOpenIcon) menuOpenIcon.classList.toggle("hidden");
    if (menuCloseIcon) menuCloseIcon.classList.toggle("hidden");
  });

  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      if (menuOpenIcon) menuOpenIcon.classList.remove("hidden");
      if (menuCloseIcon) menuCloseIcon.classList.add("hidden");
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("successBox");
  const errorBox = document.getElementById("errorBox");

  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (successBox) successBox.classList.remove("show");
    if (errorBox) errorBox.classList.remove("show");

    if (!name || !email || !message || !emailValid) {
      if (errorBox) errorBox.classList.add("show");
      return;
    }

    if (successBox) successBox.classList.add("show");
    form.reset();
  });
}

let observer;

function observeFadeUp() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}

function init() {
  renderHeroStats();
  renderStats();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderTestimonials();
  setupThemeToggle();
  setupMobileMenu();
  setupContactForm();
  initTheme();
  refreshIcons();
  observeFadeUp();
}

document.addEventListener("DOMContentLoaded", init);