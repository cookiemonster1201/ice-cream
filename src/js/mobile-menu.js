(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();

//СКРИПТ ДЛЯ СКРЫТИЯ БУРГЕР-МЕНЮ ПРИ ОТКРЫТИИ МОБ.МЕНЮ
(() => {
  const menuBtnRef = document.querySelector("[data-menu-btn]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-active");
  });

  mobileBtnClose.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-active");
  });
})();