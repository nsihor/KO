// menu toggle

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

// slider

function sliderIncrease(list, scrollAmount) {
    list.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function sliderDecrease(list, scrollAmount) {
    list.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function updateButtonsState(btnLeft, btnRight, list) {
    btnLeft.disabled = list.scrollLeft === 0;
    btnRight.disabled = list.scrollLeft >= (list.scrollWidth - list.clientWidth - 1);
}

function calculateStep(list) {
    const firstChild = list.querySelector(':first-child');
    const firstChildWidth = firstChild.offsetWidth;
    const secondChild = firstChild.nextElementSibling;
    const gap = secondChild.getBoundingClientRect().left - firstChild.getBoundingClientRect().right;

    return firstChildWidth + gap
}

// statistics slider

const statisticsList = document.querySelector('[data-action="nd-statistic-list"]');
const statisticsLeftButton = document.querySelector('[data-action="nd-statistic-btn-left"]');
const statisticsRightButton = document.querySelector('[data-action="nd-statistic-btn-right"]');

let statisticsScrollAmount = 0;
const statisticsStep = calculateStep(statisticsList);

statisticsRightButton.addEventListener('click', function() {
    if (statisticsList.scrollLeft <= (statisticsList.scrollWidth - statisticsList.clientWidth - 1)) {
        statisticsScrollAmount += statisticsStep;
        sliderIncrease(statisticsList, statisticsScrollAmount);
    }
});


statisticsLeftButton.addEventListener('click', function() {
    if (statisticsScrollAmount > 0) statisticsScrollAmount -= statisticsStep
    sliderDecrease(statisticsList, statisticsScrollAmount)
});

statisticsList.addEventListener('scroll', function() {
    updateButtonsState(statisticsLeftButton, statisticsRightButton, statisticsList)
});
