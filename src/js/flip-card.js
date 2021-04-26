(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back]'),
    flipCardFront: document.querySelector('[data-flip-front]'),
    card: document.querySelector('[data-card]'),
    };

    refs.flipCardBack.addEventListener('click', toggleCard);
    refs.flipCardFront.addEventListener('click', toggleCard);
    

    function toggleCard() {
    refs.card.classList.toggle('flipped-forth');
    }
})();

(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back2]'),
    flipCardFront: document.querySelector('[data-flip-front2]'),
    card: document.querySelector('[data-card2]'),
    };

    refs.flipCardFront.addEventListener('click', toggleCard);
    refs.flipCardBack.addEventListener('click', toggleCardBack);

    function toggleCard() {
    refs.card.classList.toggle('flipped-backwards');
    }

    function toggleCardBack() {
    refs.card.classList.remove('flipped-backwards');
    }
})();


(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back2]'),
    flipCardFront: document.querySelector('[data-flip-front2]'),
    card: document.querySelector('[data-card2]'),
    };

    refs.flipCardBack.addEventListener('click', toggleCard);
    refs.flipCardFront.addEventListener('click', toggleCard);
    

    function toggleCard() {
    refs.card.classList.toggle('flipped-forth');
    }
})();

(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back]'),
    flipCardFront: document.querySelector('[data-flip-front]'),
    card: document.querySelector('[data-card]'),
    };

    refs.flipCardFront.addEventListener('click', toggleCard);
    refs.flipCardBack.addEventListener('click', toggleCardBack);

    function toggleCard() {
    refs.card.classList.toggle('flipped-backwards');
    }

    function toggleCardBack() {
    refs.card.classList.remove('flipped-backwards');
    }
})();


(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back3]'),
    flipCardFront: document.querySelector('[data-flip-front3]'),
    card: document.querySelector('[data-card3]'),
    };

    refs.flipCardBack.addEventListener('click', toggleCard);
    refs.flipCardFront.addEventListener('click', toggleCard);
    

    function toggleCard() {
    refs.card.classList.toggle('flipped-forth');
    }
})();

(() => {
    const refs = {
    flipCardBack: document.querySelector('[data-flip-back3]'),
    flipCardFront: document.querySelector('[data-flip-front3]'),
    card: document.querySelector('[data-card3]'),
    };

    refs.flipCardFront.addEventListener('click', toggleCard);
    refs.flipCardBack.addEventListener('click', toggleCardBack);

    function toggleCard() {
    refs.card.classList.toggle('flipped-backwards');
    }

    function toggleCardBack() {
    refs.card.classList.remove('flipped-backwards');
    }
})();
