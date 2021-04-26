//СКРИПТ ДЛЯ МОДАЛЬНОГО ОКНА
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

//СКРИПТ ДЛЯ МОДАЛЬНОГО ОКНА, ВЫЗЫВАЕМОГО ИЗ МОБИЛЬНОГО МЕНЮ
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mob-open]'),
    closeModalBtn: document.querySelector('[data-modal-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();

// СКРИПТ ДЛЯ МОДАЛЬНОГО ОКНА, ВЫЗЫВАЕМОГО ЧЕРЕЗ КНОПКУ OUR LOCATION

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-modal-open]'),
    closeModalBtn: document.querySelector('[data-location-modal-close]'),
    modal: document.querySelector('[data-location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
