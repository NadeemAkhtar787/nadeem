const heroStatsData = [
  { icon: 'folder-kanban', value: '12+', label: 'Projects built' },
  { icon: 'layers-3', value: '6', label: 'Core technologies' },
  { icon: 'zap', value: '95+', label: 'Lighthouse mindset' },
  { icon: 'users', value: '10+', label: 'Clients supported' }
];

const coreSkillsData = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'React', 'Figma'];

const statsGridData = [
  { icon: 'monitor-smartphone', value: 'Responsive', label: 'Every layout scales cleanly' },
  { icon: 'gauge', value: 'Performance', label: 'Lean UI with fast loading intent' },
  { icon: 'shield-check', value: 'Accessible', label: 'Keyboard and readability aware' },
  { icon: 'layout-template', value: 'Reusable', label: 'Sections built for extension' }
];

const skillsData = [
  'Semantic HTML',
  'Modern CSS',
  'JavaScript ES6+',
  'Responsive Design',
  'Animation',
  'UI Systems',
  'Landing Pages',
  'Portfolio Sites',
  'Dashboards',
  'Form Validation',
  'Accessibility',
  'Performance Optimization'
];

const servicesData = [
  {
    icon: 'panels-top-left',
    title: 'Landing Pages',
    text: 'High-converting sections with cleaner hierarchy, stronger spacing, and clearer calls to action.'
  },
  {
    icon: 'smartphone',
    title: 'Responsive UI',
    text: 'Interfaces that hold up across mobile, tablet, and desktop instead of breaking under real usage.'
  },
  {
    icon: 'component',
    title: 'Component Systems',
    text: 'Reusable front-end structures that reduce duplicated work and make scaling less painful.'
  },
  {
    icon: 'wand-sparkles',
    title: 'UI Refreshes',
    text: 'Upgrade outdated layouts, weak visuals, and clumsy interaction patterns into sharper interfaces.'
  }
];

const projectsData = [
  {
    title: 'SaaS Dashboard UI',
    category: 'dashboard',
    description: 'A clean analytics dashboard with cards, charts, filters, and compact data patterns for modern products.',
    tags: ['Dashboard', 'Analytics', 'UI']
  },
  {
    title: 'Agency Landing Page',
    category: 'landing',
    description: 'A modern service page focused on visual trust, clear sections, and stronger conversion flow.',
    tags: ['Landing Page', 'Branding', 'CTA']
  },
  {
    title: 'Portfolio Redesign',
    category: 'portfolio',
    description: 'A personal brand site built to position the developer more credibly and display work clearly.',
    tags: ['Portfolio', 'Personal Brand', 'UX']
  },
  {
    title: 'Startup Website',
    category: 'landing',
    description: 'A lightweight startup site with product positioning, testimonials, and stronger messaging hierarchy.',
    tags: ['Startup', 'Marketing', 'Front-end']
  },
  {
    title: 'Admin Panel Refresh',
    category: 'dashboard',
    description: 'A front-end overhaul for a cluttered admin panel with improved card layout and scanning.',
    tags: ['Admin', 'Workflow', 'Design System']
  },
  {
    title: 'Developer Portfolio Pro',
    category: 'portfolio',
    description: 'A more serious portfolio structure that sells skill through layout clarity instead of decoration.',
    tags: ['Showcase', 'Portfolio', 'Modern UI']
  }
];

const testimonialsData = [
  {
    name: 'Client One',
    role: 'Startup Founder',
    quote: 'The interface looked cleaner, loaded faster, and stopped feeling like a generic template.'
  },
  {
    name: 'Client Two',
    role: 'Agency Owner',
    quote: 'Strong communication, sharp front-end execution, and a much better presentation of our service.'
  },
  {
    name: 'Client Three',
    role: 'Freelance Partner',
    quote: 'The UI improvements were obvious immediately. Better structure, better spacing, better credibility.'
  }
];

const heroStats = document.getElementById('heroStats');
const coreSkills = document.getElementById('coreSkills');
const statsGrid = document.getElementById('statsGrid');
const skillTags = document.getElementById('skillTags');
const servicesGrid = document.getElementById('servicesGrid');
const filterButtons = document.getElementById('filterButtons');
const projectsGrid = document.getElementById('projectsGrid');
const testimonialsGrid = document.getElementById('testimonialsGrid');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const successBox = document.getElementById('successBox');
const errorBox = document.getElementById('errorBox');

function createStatItem(item) {
  return `
    <div class="stat-item">
      <div class="stat-text">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
      <span class="stat-icon">
        <i data-lucide="${item.icon}" class="icon"></i>
      </span>
    </div>
  `;
}

function renderHeroStats() {
  heroStats.innerHTML = heroStatsData.map(createStatItem).join('');
}

function renderCoreSkills() {
  coreSkills.innerHTML = coreSkillsData
    .map(skill => `<span class="chip">${skill}</span>`)
    .join('');
}

function renderStatsGrid() {
  statsGrid.innerHTML = statsGridData.map(item => `
    <article class="card">
      <div class="card-inner">
        <div class="service-head">
          <div>
            <div class="metric">${item.value}</div>
            <div class="metric-label">${item.label}</div>
          </div>
          <span class="service-icon">
            <i data-lucide="${item.icon}" class="icon"></i>
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkillTags() {
  skillTags.innerHTML = skillsData.map(skill => `<span class="tag">${skill}</span>`).join('');
}

function renderServices() {
  servicesGrid.innerHTML = servicesData.map(service => `
    <article class="card service-card fade-up">
      <div class="card-inner">
        <div class="service-head">
          <h3>${service.title}</h3>
          <span class="service-icon">
            <i data-lucide="${service.icon}" class="icon"></i>
          </span>
        </div>
        <p>${service.text}</p>
      </div>
    </article>
  `).join('');
}

function renderProjects(category = 'all') {
  const filtered = category === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === category);

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="card project-card fade-up">
      <div class="card-inner">
        <div class="project-head">
          <div>
            <h3>${project.title}</h3>
            <div class="metric-label">${project.category}</div>
          </div>
          <span class="project-icon">
            <i data-lucide="folder-git-2" class="icon"></i>
          </span>
        </div>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  refreshScrollAnimations();
  refreshIcons();
}

function renderProjectFilters() {
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  filterButtons.innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${category}">
      ${category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  `).join('');

  filterButtons.addEventListener('click', event => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;

    [...filterButtons.children].forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
}

function renderTestimonials() {
  testimonialsGrid.innerHTML = testimonialsData.map(item => `
    <article class="card testimonial-card fade-up">
      <div class="card-inner">
        <div class="testimonial-head">
          <div>
            <h3>${item.name}</h3>
            <div class="metric-label">${item.role}</div>
          </div>
          <span class="quote-icon">
            <i data-lucide="quote" class="icon"></i>
          </span>
        </div>
        <p>${item.quote}</p>
      </div>
    </article>
  `).join('');
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setTheme(isLight) {
  document.body.classList.toggle('light', isLight);
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  themeToggle.innerHTML = isLight
    ? '<i data-lucide="sun-medium" class="icon"></i>'
    : '<i data-lucide="moon-star" class="icon"></i>';
  refreshIcons();
}

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(savedTheme ? savedTheme === 'light' : prefersLight);

  themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = document.body.classList.contains('light');
    setTheme(!isCurrentlyLight);
  });
}

function initMobileMenu() {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    menuToggle.querySelector('.menu-open-icon').classList.toggle('hidden');
    menuToggle.querySelector('.menu-close-icon').classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.querySelector('.menu-open-icon').classList.remove('hidden');
      menuToggle.querySelector('.menu-close-icon').classList.add('hidden');
    });
  });
}

function initContactForm() {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    successBox.style.display = 'none';
    errorBox.style.display = 'none';

    if (!name || !emailPattern.test(email) || !message) {
      errorBox.style.display = 'flex';
      return;
    }

    successBox.style.display = 'flex';
    contactForm.reset();
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(element => observer.observe(element));
}

function refreshScrollAnimations() {
  document.querySelectorAll('.fade-up').forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight - 40) {
      element.classList.add('in-view');
    }
  });
}

function init() {
  renderHeroStats();
  renderCoreSkills();
  renderStatsGrid();
  renderSkillTags();
  renderServices();
  renderProjectFilters();
  renderProjects();
  renderTestimonials();
  initTheme();
  initMobileMenu();
  initContactForm();
  initScrollAnimations();
  refreshIcons();
  refreshScrollAnimations();
}

document.addEventListener('DOMContentLoaded', init);
