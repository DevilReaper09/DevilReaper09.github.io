(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const escape = text => String(text || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
  const html = (id, value) => { const element = document.getElementById(id); if (element) element.innerHTML = value; };
  const media = item => {
    if (!item.media) return `<div class="project-media" role="img" aria-label="Reserved space: ${escape(item.mediaLabel)}"><span>${escape(item.mediaLabel)}<small>Reserved media space</small></span></div>`;
    const src = escape(item.media);
    if (item.mediaType === 'video') return `<div class="project-media filled"><video controls preload="metadata" aria-label="${escape(item.mediaLabel)}"><source src="${src}">Your browser does not support this video.</video></div>`;
    return `<div class="project-media filled"><img src="${src}" alt="${escape(item.mediaLabel)}" loading="lazy"></div>`;
  };
  text('intro', data.intro); text('research-note', data.researchNote); text('skills', data.skills); text('hobbies', data.hobbies);
  html('areas', data.areas.map(a => `<span>${escape(a)}</span>`).join(''));
  html('research-list', data.research.map((r, i) => `<article class="research-item"><div class="item-number">0${i+1}</div><div><h3>${escape(r.title)}</h3><span class="tag">${escape(r.status)}</span></div><div class="research-description"><p>${escape(r.description)}</p><p class="detail">${escape(r.detail)}</p>${r.mediaLabel ? media(r) : ''}</div></article>`).join(''));
  html('project-list', data.projects.map(p => `<article class="project">${p.mediaLabel ? media(p) : ''}<span class="tag">${escape(p.label)}</span><h3>${escape(p.title)}</h3><p>${escape(p.description)}</p>${p.detail ? `<details><summary>Context & contribution</summary><p>${escape(p.detail)}</p></details>` : ''}<p class="tech">${escape(p.tech)}</p></article>`).join(''));
  const experienceGroups = [
    { key: 'industry', title: 'Industry experience' },
    { key: 'campus', title: 'Teaching & leadership' }
  ];
  html('experience-list', experienceGroups.map(group => `
    <section class="experience-group" aria-labelledby="experience-${group.key}">
      <h2 class="experience-group-title" id="experience-${group.key}">${escape(group.title)}</h2>
      <ol class="experience-timeline">
        ${data.experience.filter(item => item.category === group.key).map(item => `
          <li class="experience-entry">
            <div class="experience-date">
              <span class="experience-years">${escape(item.years)}</span>
              <span class="experience-period">${escape(item.date)}</span>
            </div>
            <details class="experience-details"${item.current ? ' open' : ''}>
              <summary class="experience-summary">
                <span class="experience-summary-text">
                  <span class="experience-title">${escape(item.role)}</span>
                  <span class="experience-company">${escape(item.org)}</span>
                </span>
                <span class="experience-toggle" aria-hidden="true"></span>
              </summary>
              <div class="experience-work"><ul>${item.bullets.map(bullet => `<li>${escape(bullet)}</li>`).join('')}</ul></div>
            </details>
          </li>`).join('')}
      </ol>
    </section>`).join(''));

  const e = data.education;
  html('education', `<p class="education-title">${escape(e.institution)}</p><p>${escape(e.degree)}<br>${escape(e.date)}</p><p>${escape(e.distinction)}<br>${escape(e.honors)}</p>`);
  html('contact-links', data.links.map(l => `<a href="${escape(l.url)}" target="_blank" rel="noopener noreferrer">${escape(l.label)}</a>`).join(''));
  if (data.portrait && document.querySelector('.portrait-art')) document.querySelector('.portrait-art').innerHTML = `<img src="${escape(data.portrait)}" alt="Anant Rastogi">`;
  const toggle = document.getElementById('menu-toggle'), nav = document.getElementById('navigation');
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', open); nav.classList.toggle('open', open); toggle.querySelector('span').textContent = open ? '−' : '+'; });
  nav.addEventListener('click', event => { if (event.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); toggle.querySelector('span').textContent = '+'; } });
  const themeSelect = document.getElementById('theme-select');
  const themes = ['lab', 'graphite', 'editorial'];
  if (!themes.includes(document.documentElement.dataset.theme)) document.documentElement.dataset.theme = 'lab';
  themeSelect.value = document.documentElement.dataset.theme;
  themeSelect.addEventListener('change', () => { document.documentElement.dataset.theme = themeSelect.value; try { localStorage.setItem('portfolio-theme', themeSelect.value); } catch(e) {} });
})();
