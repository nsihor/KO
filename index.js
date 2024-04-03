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

// statistics slider

const statisticsList = document.querySelector('[data-action="nd-statistic-list"]');
const statisticsLeftButton = document.querySelector('[data-action="nd-statistic-btn-left"]');
const statisticsRightButton = document.querySelector('[data-action="nd-statistic-btn-right"]');

let statisticsScrollAmount = 0;
const statisticsStep = 343;

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
