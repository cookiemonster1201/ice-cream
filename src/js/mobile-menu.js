(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();

/*СКРИПТ ДЛЯ СКРЫТИЯ БУРГЕР-МЕНЮ ПРИ ОТКРЫТИИ МОБ.МЕНЮ И 
ДЛЯ ЗАКРЫТИЯ МОБ. МЕНЮ ПОСЛЕ КЛИКА ПО ССЫЛКЕ */
(() => {
  const menuBtnRef = document.querySelector('[data-menu-btn]');
  const mobileMenuClose = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-active');
  });

  mobileMenuClose.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-active');
    // mobileMenuClose.classList.toggle('is-close');
  });
})();
