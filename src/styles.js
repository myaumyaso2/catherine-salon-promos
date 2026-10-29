// Фирменные стили блока спецпредложений клиники «Катрин»
module.exports = `
  .cs-oct-scope {
    --cs-bg-light: #ffffff;
    --cs-bg-card: #fcfcfc;
    --cs-bg-dark: #171717;
    --cs-text-primary: #171717;
    --cs-text-muted: #555555;
    --cs-text-light: #f7f7f7;
    --cs-accent-gold: #c5a265;
    --cs-accent-gold-hover: #b08d51;
    --cs-border-color: #e5e5e5;
    --cs-border-dark: #2a2a2a;
    --cs-font-title: "Forum", Georgia, "Times New Roman", serif;
    --cs-font-body: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --cs-radius: 0px; /* Строгая премиальная геометрия клиники */
    
    font-family: var(--cs-font-body);
    color: var(--cs-text-primary);
    box-sizing: border-box;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  .cs-oct-scope *,
  .cs-oct-scope *::before,
  .cs-oct-scope *::after {
    box-sizing: border-box;
  }

  #cs-october-promos-root {
    max-width: 1200px;
    margin: 40px auto 60px;
    padding: 0 20px;
  }

  /* Шапка секции */
  .cs-oct-header {
    text-align: center;
    margin-bottom: 36px;
  }
  .cs-oct-subtitle {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--cs-accent-gold);
    margin-bottom: 12px;
  }
  .cs-oct-title {
    font-family: var(--cs-font-title);
    font-size: 38px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--cs-text-primary);
    margin: 0 0 16px;
    letter-spacing: 0.02em;
  }
  .cs-oct-intro {
    font-size: 15px;
    color: var(--cs-text-muted);
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Главный Hero-баннер (во всю ширину) */
  .cs-oct-flash-banner {
    background: var(--cs-bg-dark);
    color: var(--cs-text-light);
    border: 1px solid var(--cs-border-dark);
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 36px;
    margin-bottom: 32px;
    align-items: stretch;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
  }
  .cs-oct-flash-content {
    padding: 44px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cs-oct-flash-tagline {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .cs-oct-badge-flash {
    background: var(--cs-accent-gold);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 5px 12px;
    display: inline-block;
  }
  .cs-oct-flash-date {
    font-size: 13px;
    color: #a0a0a0;
    letter-spacing: 0.04em;
  }
  .cs-oct-flash-title {
    font-family: var(--cs-font-title);
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 14px;
    line-height: 1.25;
  }
  .cs-oct-flash-offer {
    font-size: 18px;
    font-weight: 600;
    color: var(--cs-accent-gold);
    margin-bottom: 16px;
  }
  .cs-oct-flash-offer mark {
    background: transparent;
    color: #ffffff;
    font-weight: 700;
  }
  .cs-oct-flash-text {
    font-size: 14px;
    color: #cccccc;
    line-height: 1.6;
    margin: 0 0 24px;
  }
  .cs-oct-flash-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 18px;
    margin-bottom: 30px;
    font-size: 13px;
    color: #e0e0e0;
  }
  .cs-oct-feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cs-oct-feature-bullet {
    width: 6px;
    height: 6px;
    background: var(--cs-accent-gold);
    flex-shrink: 0;
  }
  .cs-oct-flash-actions-inline {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .cs-oct-flash-media {
    position: relative;
    overflow: hidden;
    min-height: 320px;
    background: #000;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }
  .cs-oct-flash-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
  }
  .cs-oct-flash-banner:hover .cs-oct-flash-img {
    transform: scale(1.03);
  }

  /* Сетка из 3 программ месяца */
  .cs-oct-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 32px;
  }
  .cs-oct-card {
    background: var(--cs-bg-card);
    border: 1px solid var(--cs-border-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    position: relative;
  }
  .cs-oct-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
    border-color: #d0d0d0;
  }
  .cs-card-media {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: #171717;
  }
  .cs-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.5s ease;
  }
  .cs-oct-card:hover .cs-card-img {
    transform: scale(1.04);
  }
  .cs-card-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(23, 23, 23, 0.88);
    backdrop-filter: blur(4px);
    color: var(--cs-accent-gold);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 5px 10px;
    border: 1px solid rgba(197, 162, 101, 0.35);
  }
  .cs-card-body {
    padding: 26px 24px 26px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }
  .cs-card-title {
    font-family: var(--cs-font-title);
    font-size: 23px;
    font-weight: 400;
    color: var(--cs-text-primary);
    margin: 0 0 10px;
    line-height: 1.28;
  }
  .cs-card-aim {
    font-size: 13px;
    color: var(--cs-text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
    font-style: italic;
  }
  .cs-card-list {
    list-style: none;
    padding: 0;
    margin: 0 0 22px;
    font-size: 13px;
    color: #444444;
  }
  .cs-card-list li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 8px;
    line-height: 1.45;
  }
  .cs-card-list li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--cs-accent-gold);
  }
  .cs-card-value-box {
    border-top: 1px solid var(--cs-border-color);
    padding-top: 18px;
    margin-bottom: 22px;
  }
  .cs-card-value-main {
    font-size: 17px;
    font-weight: 700;
    color: var(--cs-text-primary);
    margin-bottom: 6px;
  }
  .cs-card-value-sub {
    font-size: 12px;
    color: var(--cs-text-muted);
    line-height: 1.45;
  }
  .cs-card-limit-note {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 600;
    color: var(--cs-accent-gold-hover);
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .cs-card-limit-dot {
    width: 6px;
    height: 6px;
    background: var(--cs-accent-gold);
    border-radius: 50%;
  }
  .cs-card-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
  }

  /* Кнопки */
  .cs-btn-primary-gold {
    display: inline-block;
    background: var(--cs-accent-gold);
    color: #ffffff !important;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 14px 26px;
    border: none;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.2s ease;
    text-align: center;
  }
  .cs-btn-primary-gold:hover {
    background: var(--cs-accent-gold-hover);
  }
  .cs-btn-primary-black {
    flex-grow: 1;
    display: inline-block;
    background: var(--cs-bg-dark);
    color: #ffffff !important;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 13px 18px;
    border: 1px solid var(--cs-bg-dark);
    cursor: pointer;
    transition: background 0.25s ease, border-color 0.25s ease;
    text-align: center;
  }
  .cs-btn-primary-black:hover {
    background: #333333;
    border-color: #333333;
  }
  .cs-btn-outline-details {
    display: inline-block;
    background: transparent;
    color: var(--cs-text-primary);
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 12px 14px;
    border: 1px solid var(--cs-border-color);
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .cs-btn-outline-details:hover {
    border-color: var(--cs-text-primary);
    background: #f5f5f5;
  }
  .cs-btn-link-white {
    background: transparent;
    border: none;
    color: #cccccc;
    font-size: 13px;
    cursor: pointer;
    padding: 8px 0;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s ease;
  }
  .cs-btn-link-white:hover {
    color: #ffffff;
  }

  /* Дисклеймер */
  .cs-oct-disclaimer {
    border-top: 1px solid var(--cs-border-color);
    padding-top: 20px;
    font-size: 12px;
    color: #888888;
    line-height: 1.6;
    text-align: center;
  }

  /* Модальные окна */
  .cs-modal-backdrop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(4px);
    z-index: 999999;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .cs-modal-backdrop.is-active {
    display: flex;
  }
  .cs-modal-dialog {
    background: #ffffff;
    max-width: 620px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    padding: 38px 34px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--cs-border-color);
  }
  .cs-modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    background: transparent;
    border: none;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    color: #888888;
    transition: color 0.2s;
  }
  .cs-modal-close:hover {
    color: #171717;
  }
  .cs-modal-badge {
    font-size: 11px;
    font-weight: 700;
    color: var(--cs-accent-gold);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
  }
  .cs-modal-title {
    font-family: var(--cs-font-title);
    font-size: 26px;
    font-weight: 400;
    color: var(--cs-text-primary);
    margin: 0 0 20px;
    line-height: 1.25;
  }
  .cs-modal-body {
    font-size: 14px;
    color: #444444;
    line-height: 1.65;
  }
  .cs-modal-body h4 {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--cs-text-primary);
    margin: 18px 0 8px;
  }
  .cs-modal-body ul {
    margin: 8px 0 16px;
    padding-left: 20px;
  }
  .cs-modal-body li {
    margin-bottom: 6px;
  }
  .cs-modal-footer {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--cs-border-color);
    display: flex;
    justify-content: flex-end;
  }

  /* Fallback popup */
  .cs-fallback-form-group {
    margin-bottom: 16px;
  }
  .cs-fallback-form-group label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    color: #555555;
  }
  .cs-fallback-form-group input {
    width: 100%;
    padding: 14px;
    border: 1px solid #cccccc;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .cs-fallback-form-group input:focus {
    border-color: #171717;
  }
  .cs-fallback-form-group input[readonly] {
    background: #f7f7f7;
    border-color: #e5e5e5;
    color: #171717;
    font-weight: 600;
  }

  /* Адаптивность */
  @media (max-width: 959px) {
    .cs-oct-cards-grid {
      grid-template-columns: 1fr;
    }
    .cs-oct-flash-banner {
      grid-template-columns: 1fr;
      padding: 30px 24px;
      gap: 24px;
    }
    .cs-oct-flash-media {
      order: -1;
      min-height: 240px;
      border-left: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }
  }

  @media (max-width: 639px) {
    #cs-october-promos-root {
      margin: 24px auto 44px;
      padding: 0 14px;
    }
    .cs-oct-title {
      font-size: 28px;
    }
    .cs-oct-flash-content {
      padding: 0;
    }
    .cs-oct-flash-features {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .cs-oct-flash-actions-inline {
      flex-direction: column;
      align-items: stretch;
    }
    .cs-btn-primary-gold {
      width: 100%;
    }
    .cs-modal-title {
      font-size: 22px;
    }
    .cs-card-actions {
      flex-direction: column;
      align-items: stretch;
    }
    .cs-btn-outline-details {
      text-align: center;
    }
  }
`;
