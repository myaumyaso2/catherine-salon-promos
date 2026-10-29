// Клиентский модуль управления интерактивностью и монтированием

function initPromosModule(htmlContent) {
  // 1. Поиск контейнера для монтирования
  var target = document.getElementById('catherine-promos-container') ||
               document.getElementById('cs-october-promos-root');

  if (!target) {
    // Если контейнера еще нет, ищем блок T123 или вставляем в начало контента
    var t123 = document.querySelector('.r[data-record-type="131"] .t123') ||
               document.querySelector('.t-records');
    target = document.createElement('div');
    target.id = 'catherine-promos-container';
    if (t123) {
      t123.parentNode.insertBefore(target, t123);
    } else {
      document.body.prepend(target);
    }
  }

  // Заменяем содержимое
  target.innerHTML = htmlContent;

  // 2. Инициализация модальных окон условий
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

  // 3. Интеграция с официальной формой Tilda (#popup:zayavka / rec608825704)
  var promoButtons = target.querySelectorAll('.cs-promo-trigger');

  promoButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var promoName = this.getAttribute('data-promo-name') || 'Специальное предложение ноября';

      // Закрываем модалку условий, если клик был из нее
      var parentModal = this.closest('.cs-modal-backdrop');
      if (parentModal) {
        closeModal(parentModal);
      }

      var tildaPopup = document.querySelector('[data-tooltip-hook="#popup:zayavka"]') ||
                       document.getElementById('rec608825704') ||
                       document.querySelector('.t-popup');

      if (tildaPopup) {
        // Контекстная плашка с названием акции
        var descr = tildaPopup.querySelector('.t-popup__descr, .t-form__text, .t-descr');
        if (descr) {
          if (!descr.getAttribute('data-original-text')) {
            descr.setAttribute('data-original-text', descr.innerHTML);
          }
          descr.innerHTML = descr.getAttribute('data-original-text') +
            '<br><strong style="color: #c5a265; display: inline-block; margin-top: 6px;">Запись по акции: ' + promoName + '</strong>';
        }

        // Скрытое поле promo_name
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

        // Вызов показа поп-апа Тильды
        var popupId = tildaPopup.getAttribute('data-record-id') || '608825704';
        if (typeof window.t702_showPopup === 'function') {
          window.t702_showPopup(popupId);
        } else if (typeof window.t_popup__showPopup === 'function') {
          window.t_popup__showPopup(popupId);
        }
      } else {
        // Автономный Fallback
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

module.exports = { initPromosModule };
