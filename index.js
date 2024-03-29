const burgerBtn = document.querySelector('[data-action="nd-burger"]');
const closeBtn = document.querySelector('[data-action="nd-close"]');
const mobMenu = document.querySelector('[data-action="nd-mob-menu"]')

function toggleMenu() {
    burgerBtn.classList.toggle('nd_none');
    closeBtn.classList.toggle('nd_none');
    mobMenu.classList.toggle('nd_none');
}

burgerBtn.addEventListener('click', toggleMenu);

closeBtn.addEventListener('click', toggleMenu);
