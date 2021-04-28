(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-franch-modal-open]'),
        closeModalBtn: document.querySelector('[data-franch-modal-close]'),
        modal: document.querySelector('[data-franch-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();