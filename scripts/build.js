const fs = require('fs');
const path = require('path');

const promosData = require('../src/data/promosData.js');
const styles = require('../src/styles.js');
const { renderHtml } = require('../src/render.js');

function build() {
  console.log('⚡ Начинаем сборку бандла спецпредложений клиники «Катрин»...');

  // 1. Рендер HTML
  const rawHtml = renderHtml(promosData, styles);

  // 2. Создание автономного IIFE бандла
  const bundleJs = `/**
 * Catherine Clinic Promos Dynamic Bundle
 * Version: ${new Date().toISOString().slice(0, 10)}
 * Month: ${promosData.month}
 * (C) ООО «Катрин»
 */
(function() {
  var htmlContent = ${JSON.stringify(rawHtml)};

  function initCatherinePromos() {
    var target = document.getElementById('catherine-promos-container') ||
                 document.getElementById('cs-october-promos-root');

    if (!target) {
      var t123 = document.querySelector('.r[data-record-type="131"] .t123') ||
                 document.querySelector('.t-records');
      target = document.createElement('div');
      target.id = 'catherine-promos-container';
      if (t123 && t123.parentNode) {
        t123.parentNode.insertBefore(target, t123);
      } else {
        document.body.prepend(target);
      }
    }

    target.innerHTML = htmlContent;

    // Инициализация модалок
    var openButtons = target.querySelectorAll('.cs-modal-open-btn');
    var closeButtons = target.querySelectorAll('.cs-modal-close');
    var backdrops = target.querySelectorAll('.cs-modal-backdrop');

    function closeModal(modal) {
      if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    openButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('data-modal-target');
        var targetModal = target.querySelector('#' + targetId) || document.getElementById(targetId);
        if (targetModal) {
          targetModal.classList.add('is-active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    closeButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var modal = this.closest('.cs-modal-backdrop');
        closeModal(modal);
      });
    });

    backdrops.forEach(function(backdrop) {
      backdrop.addEventListener('click', function(e) {
        if (e.target === this) {
          closeModal(this);
        }
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        backdrops.forEach(function(modal) {
          if (modal.classList.contains('is-active')) {
            closeModal(modal);
          }
        });
      }
    });

    // Интеграция с официальной формой записи Тильды (#popup:zayavka / rec608825704)
    var promoButtons = target.querySelectorAll('.cs-promo-trigger');

    promoButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var promoName = this.getAttribute('data-promo-name') || 'Специальное предложение месяца';

        var parentModal = this.closest('.cs-modal-backdrop');
        if (parentModal) {
          closeModal(parentModal);
        }

        var tildaPopup = document.querySelector('[data-tooltip-hook="#popup:zayavka"]') ||
                         document.getElementById('rec608825704') ||
                         document.querySelector('.t-popup');

        if (tildaPopup) {
          var descr = tildaPopup.querySelector('.t-popup__descr, .t-form__text, .t-descr');
          if (descr) {
            if (!descr.getAttribute('data-original-text')) {
              descr.setAttribute('data-original-text', descr.innerHTML);
            }
            descr.innerHTML = descr.getAttribute('data-original-text') +
              '<br><strong style="color: #c5a265; display: inline-block; margin-top: 6px;">Запись по акции: ' + promoName + '</strong>';
          }

          var form = tildaPopup.querySelector('form');
          if (form) {
            var hiddenInput = form.querySelector('input[name="promo_name"]');
            if (!hiddenInput) {
              hiddenInput = document.createElement('input');
              hiddenInput.type = 'hidden';
              hiddenInput.name = 'promo_name';
              form.appendChild(hiddenInput);
            }
            hiddenInput.value = promoName;
          }

          var popupId = tildaPopup.getAttribute('data-record-id') || '608825704';
          if (typeof window.t702_showPopup === 'function') {
            window.t702_showPopup(popupId);
          } else if (typeof window.t_popup__showPopup === 'function') {
            window.t_popup__showPopup(popupId);
          }
        } else {
          e.preventDefault();
          var fallbackPopup = document.getElementById('catherine-promo-fallback-popup');
          var fallbackInput = document.getElementById('cs-fallback-promo-input');
          if (fallbackPopup && fallbackInput) {
            fallbackInput.value = promoName;
            fallbackPopup.classList.add('is-active');
            document.body.style.overflow = 'hidden';
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatherinePromos);
  } else {
    initCatherinePromos();
  }
})();
`;

  // 3. Запись в dist/
  const distDir = path.resolve(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const outPath = path.join(distDir, 'promos.min.js');
  fs.writeFileSync(outPath, bundleJs, 'utf8');

  // Также создадим dist/index.html для локального предпросмотра
  const previewHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Предпросмотр акций клиники «Катрин»</title>
  <link href="https://fonts.googleapis.com/css2?family=Forum&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; background: #ffffff;">
  <div id="catherine-promos-container"></div>
  <script src="./promos.min.js"></script>
</body>
</html>`;
  fs.writeFileSync(path.join(distDir, 'index.html'), previewHtml, 'utf8');

  console.log('✅ Сборка успешно завершена: ' + outPath + ' (' + bundleJs.length + ' байт)');
}

build();
