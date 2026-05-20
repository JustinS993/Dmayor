const sectionSlugs = [
  'resumen',
  'definicion',
  'niveles',
  'evaluacion',
  'ventajas-limitaciones',
  'buenas-practicas',
  'recursos'
];
const sectionTitles = {
  resumen: 'Resumen',
  definicion: 'Definición y propósito',
  niveles: 'Niveles del TRL',
  evaluacion: 'Cómo se evalúa el TRL',
  'ventajas-limitaciones': 'Ventajas y limitaciones',
  'buenas-practicas': 'Buenas prácticas y recomendaciones',
  recursos: 'Recursos y referencias'
};
const sectionBody = document.getElementById('section-body');
const sectionTitle = document.getElementById('section-title');
const pager = document.querySelector('.section-actions');
const navLinks = document.querySelectorAll('.main-nav a');
const announcement = document.createElement('div');
announcement.className = 'visually-hidden';
announcement.setAttribute('aria-live', 'polite');
announcement.setAttribute('aria-atomic', 'true');
document.body.appendChild(announcement);

function setActiveNav(slug) {
  navLinks.forEach(link => {
    const isActive = link.dataset.slug === slug;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function renderPager(currentSlug) {
  const index = sectionSlugs.indexOf(currentSlug);
  const prevSlug = sectionSlugs[index - 1];
  const nextSlug = sectionSlugs[index + 1];
  const links = [];

  if (prevSlug) {
    links.push(`<a class="button prev" href="#${prevSlug}" data-slug="${prevSlug}">Anterior</a>`);
  }
  if (nextSlug) {
    links.push(`<a class="button next" href="#${nextSlug}" data-slug="${nextSlug}">Siguiente</a>`);
  }

  pager.innerHTML = links.join('');
}

async function loadSection(slug) {
  sectionTitle.textContent = sectionTitles[slug] || 'Sección';
  sectionBody.innerHTML = '<p>Cargando contenido...</p>';

  try {
    const response = await fetch(`/api/sections/${slug}`);
    if (!response.ok) throw new Error('No se pudo cargar la sección');
    const html = await response.text();
    sectionBody.innerHTML = html;
    sectionBody.querySelectorAll('a').forEach(a => a.setAttribute('target', '_blank'));
    announcement.textContent = `Sección actual: ${sectionTitles[slug]}`;
  } catch (error) {
    sectionBody.innerHTML = `<p class="error-message">Error al obtener el contenido. Intenta recargar la página.</p>`;
  }
}

function changeSection(slug) {
  if (!sectionSlugs.includes(slug)) slug = 'resumen';
  setActiveNav(slug);
  renderPager(slug);
  loadSection(slug);
  history.replaceState(null, '', `#${slug}`);
}

function setupNavigation() {
  document.body.addEventListener('click', event => {
    const link = event.target.closest('.main-nav a, .section-actions a');
    if (!link) return;
    event.preventDefault();
    const targetSlug = link.dataset.slug;
    if (targetSlug) changeSection(targetSlug);
  });
}

function init() {
  document.body.classList.remove('no-js');
  setupNavigation();
  const initialHash = location.hash.replace('#', '') || 'resumen';
  changeSection(initialHash);
}

document.addEventListener('DOMContentLoaded', init);
