// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, title, meta){
  lightboxImg.classList.remove('zoomed');
  lightboxImg.src = src;
  lightboxImg.alt = title;
  lightboxTitle.textContent = title;
  lightboxMeta.textContent = meta;
  lightbox.classList.add('open');
}
lightboxImg.addEventListener('click', () => lightboxImg.classList.toggle('zoomed'));
lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') lightbox.classList.remove('open'); });

// Helpers
const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const meta = i => `${i.org}${i.date ? ' · ' + i.date : ''}`;

// Awards
const awardGrid = document.getElementById('awardGrid');
AWARDS.forEach(a => {
  const card = document.createElement('article');
  card.className = 'award-card reveal';
  card.innerHTML = `
    <div class="award-thumb"><img src="${a.image}" alt="${esc(a.title)}" loading="lazy"></div>
    <div class="award-body">
      <p class="award-date">${esc(a.date)}</p>
      <h3>${esc(a.title)}</h3>
      <p class="award-org">${esc(a.org)}</p>
      <p class="award-note">${esc(a.note)}</p>
    </div>`;
  card.addEventListener('click', () => openLightbox(a.image, a.title, meta(a)));
  awardGrid.appendChild(card);
});

// Badges
const badgeGrid = document.getElementById('badgeGrid');
BADGES.forEach(b => {
  const card = document.createElement('article');
  card.className = 'badge-card reveal';
  card.innerHTML = `
    <div class="badge-thumb"><img src="${b.image}" alt="${esc(b.title)} badge" loading="lazy"></div>
    <div class="badge-body">
      <h3>${esc(b.title)}</h3>
      <p class="award-org">${esc(b.org)}</p>
      <p class="cert-date">${esc(b.date)}</p>
    </div>`;
  card.addEventListener('click', () => openLightbox(b.image, b.title, meta(b)));
  badgeGrid.appendChild(card);
});

// Certificates with category filter
const certGrid = document.getElementById('certGrid');
const certChips = document.getElementById('certChips');
const categories = ['All', ...new Set(CERTIFICATES.map(c => c.category))];
let activeCat = 'All';

function renderCerts(){
  certGrid.innerHTML = '';
  CERTIFICATES.filter(c => activeCat === 'All' || c.category === activeCat).forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <div class="cert-thumb"><img src="${cert.image}" alt="${esc(cert.title)} certificate" loading="lazy"></div>
      <div class="cert-info">
        <h4>${esc(cert.title)}</h4>
        <p class="cert-org">${esc(cert.org)}</p>
        ${cert.date ? `<p class="cert-date">${esc(cert.date)}</p>` : ''}
        <p class="cert-view">View Certificate →</p>
      </div>`;
    card.addEventListener('click', () => openLightbox(cert.image, cert.title, meta(cert)));
    certGrid.appendChild(card);
  });
}
categories.forEach(cat => {
  const n = cat === 'All' ? CERTIFICATES.length : CERTIFICATES.filter(c => c.category === cat).length;
  const chip = document.createElement('button');
  chip.className = 'chip' + (cat === 'All' ? ' active' : '');
  chip.innerHTML = `${cat} <span>${n}</span>`;
  chip.addEventListener('click', () => {
    activeCat = cat;
    certChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderCerts();
  });
  certChips.appendChild(chip);
});
renderCerts();

// Gentle scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .skill-card, .project-card, .timeline-item').forEach(el => {
  el.classList.add('reveal'); io.observe(el);
});

// Contact form (static demo — wire up to a backend/service to actually send)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks — this form isn't connected to an email service yet. Please reach out directly via email or LinkedIn for now.";
  form.reset();
});

// Project pictures open full-size in the lightbox
document.querySelectorAll('.project-thumb img').forEach(img => {
  img.addEventListener('click', () => {
    const title = img.closest('.project-card').querySelector('h3').textContent;
    openLightbox(img.src, title, 'Project screenshot');
  });
});
