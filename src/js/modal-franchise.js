(() => {
    const refs = {
        openFranchBtn: document.querySelector('[data-modal-franch-open]'),
        closeFranchBtn: document.querySelector('[data-modal-franch-close]'),
        modalFranch: document.querySelector('[data-modal-franch]'),
    };

    refs.openFranchBtn.addEventListener('click', toggleModal);
    refs.closeFranchBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modalFranch.toggle('is-hide');
    }
})();