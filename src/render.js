// Генератор разметки для спецпредложений клиники «Катрин»

function renderHtml(data, styles) {
  const { header, heroBanner, cards, disclaimer, modals } = data;

  const cardsHtml = cards.map(c => `
    <div class="cs-oct-card">
      <div class="cs-card-media">
        <img src="${c.imageSrc}" alt="${c.imageAlt}" class="cs-card-img" loading="lazy">
        <span class="cs-card-badge">${c.badge}</span>
      </div>
      <div class="cs-card-body">
        <div>
          <h3 class="cs-card-title">${c.title}</h3>
          <div class="cs-card-aim">${c.aim}</div>
          <ul class="cs-card-list">
            ${c.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="cs-card-value-box">
            <div class="cs-card-value-main">${c.priceMain}</div>
            <div class="cs-card-value-sub">${c.priceSub}</div>
            <div class="cs-card-limit-note">
              <span class="cs-card-limit-dot"></span>
              <span>${c.limitNote}</span>
            </div>
          </div>
          <div class="cs-card-actions">
            <a href="#popup:zayavka" class="cs-btn-primary-black cs-promo-trigger" data-promo-name="${c.promoName}">
              ${c.buttonText}
            </a>
            <button type="button" class="cs-btn-outline-details cs-modal-open-btn" data-modal-target="${c.modalTarget}">
              Условия
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const modalsHtml = modals.map(m => `
    <div id="${m.id}" class="cs-modal-backdrop">
      <div class="cs-modal-dialog">
        <button type="button" class="cs-modal-close" aria-label="Закрыть">&times;</button>
        <div class="cs-modal-header">
          <div class="cs-modal-badge">${m.badge}</div>
          <h3 class="cs-modal-title">${m.title}</h3>
        </div>
        <div class="cs-modal-body">
          ${m.sections.map(s => {
            const body = Array.isArray(s.content)
              ? `<ul>${s.content.map(li => `<li>${li}</li>`).join('')}</ul>`
              : `<p>${s.content}</p>`;
            return `<h4>${s.title}</h4>${body}`;
          }).join('')}
        </div>
        <div class="cs-modal-footer">
          <a href="#popup:zayavka" class="cs-btn-primary-black cs-promo-trigger" data-promo-name="${m.btnPromoName}">
            Записаться
          </a>
        </div>
      </div>
    </div>
  `).join('');

  return `
<div id="cs-october-promos-root" class="cs-oct-scope">
  <style>
${styles}
  </style>

  <!-- Шапка секции -->
  <div class="cs-oct-header">
    <div class="cs-oct-subtitle">${header.subtitle}</div>
    <h2 class="cs-oct-title">${header.title}</h2>
    <p class="cs-oct-intro">${header.intro}</p>
  </div>

  <!-- Главный Hero-баннер -->
  <div class="cs-oct-flash-banner">
    <div class="cs-oct-flash-content">
      <div class="cs-oct-flash-tagline">
        <span class="cs-oct-badge-flash">${heroBanner.badge}</span>
        <span class="cs-oct-flash-date">${heroBanner.date}</span>
      </div>
      <h3 class="cs-oct-flash-title">${heroBanner.title}</h3>
      <div class="cs-oct-flash-offer">${heroBanner.offerHtml}</div>
      <p class="cs-oct-flash-text">${heroBanner.text}</p>
      <div class="cs-oct-flash-features">
        ${heroBanner.features.map(f => `
          <div class="cs-oct-feature-item">
            <span class="cs-oct-feature-bullet"></span>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>
      <div class="cs-oct-flash-actions-inline">
        <a href="#popup:zayavka" class="cs-btn-primary-gold cs-promo-trigger" data-promo-name="${heroBanner.promoName}">
          ${heroBanner.buttonText}
        </a>
        <button type="button" class="cs-btn-link-white cs-modal-open-btn" data-modal-target="${heroBanner.modalTarget}">
          ${heroBanner.modalBtnText}
        </button>
      </div>
    </div>
    <div class="cs-oct-flash-media">
      <img src="${heroBanner.imageSrc}" alt="${heroBanner.imageAlt}" class="cs-oct-flash-img" loading="lazy">
    </div>
  </div>

  <!-- Сетка из 3 программ -->
  <div class="cs-oct-cards-grid">
    ${cardsHtml}
  </div>

  <!-- Дисклеймер -->
  <div class="cs-oct-disclaimer">
    ${disclaimer}
  </div>

  <!-- Модальные окна -->
  ${modalsHtml}

  <!-- Fallback popup -->
  <div id="catherine-promo-fallback-popup" class="cs-modal-backdrop">
    <div class="cs-modal-dialog" style="max-width: 480px;">
      <button type="button" class="cs-modal-close" aria-label="Закрыть">&times;</button>
      <div class="cs-modal-header">
        <div class="cs-modal-badge">Онлайн-запись в клинику</div>
        <h3 class="cs-modal-title" style="font-size: 22px;">Запись по специальному предложению</h3>
      </div>
      <form id="cs-fallback-record-form" onsubmit="event.preventDefault(); alert('Спасибо! Ваша заявка принята. Администратор клиники «Катрин» свяжется с вами для подтверждения даты и времени визита.'); document.getElementById('catherine-promo-fallback-popup').classList.remove('is-active');">
        <div class="cs-fallback-form-group">
          <label>Выбранная программа</label>
          <input type="text" id="cs-fallback-promo-input" readonly value="">
        </div>
        <div class="cs-fallback-form-group">
          <label>Ваше имя</label>
          <input type="text" required placeholder="Как к вам обращаться?">
        </div>
        <div class="cs-fallback-form-group">
          <label>Номер телефона</label>
          <input type="tel" required placeholder="+7 (___) ___-__-__">
        </div>
        <button type="submit" class="cs-btn-primary-black" style="width: 100%; padding: 15px;">
          Отправить заявку
        </button>
      </form>
    </div>
  </div>
</div>
`;
}

module.exports = { renderHtml };
