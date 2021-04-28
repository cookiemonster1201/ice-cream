//СКРИПТ ДЛЯ КНОПКИ СКРОЛА ВВЕРХ
(function() {
  'use strict';

    var goTopBtn = document.querySelector('.scrollup');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
    
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
        
    if (scrolled > coords) {
        goTopBtn.classList.add('scrollup-show');
        goTopBtn.classList.remove('scrollup-hidden');
      }

       if (scrolled < coords) {
          goTopBtn.classList.remove('scrollup-show');
          goTopBtn.classList.add('scrollup-hidden');
      }
      
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 8);
    }
  }

})();