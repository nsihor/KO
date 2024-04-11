function sliderScroll(list, scrollAmount) {
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

function findSliderElements(name) {
    const list = document.querySelector(`[data-action="nd-${name}-list"]`);
    const leftBtn = document.querySelector(`[data-action="nd-${name}-btn-left"]`);
    const rightBtn = document.querySelector(`[data-action="nd-${name}-btn-right"]`);

    return {list, leftBtn, rightBtn};
}

function createSlider(name) {
    const {list, leftBtn, rightBtn} = findSliderElements(name)

    let scrollAmount = 0;
    const step = calculateStep(list);

    let lastScrollTime = 0;
    const minScrollInterval = 400;

    rightBtn.addEventListener('click', function() {
        const currentTime = performance.now();

        if (currentTime - lastScrollTime > minScrollInterval) {
            scrollAmount += step;
            sliderScroll(list, scrollAmount);
            lastScrollTime = currentTime;
        }
    });

    leftBtn.addEventListener('click', function() {
        if (scrollAmount > 0) scrollAmount -= step
        sliderScroll(list, scrollAmount)
    });

    list.addEventListener('scroll', function() {
        updateButtonsState(leftBtn, rightBtn, list)
    });
}

// slider creating

createSlider('statistics')

createSlider('blog')

createSlider('sites')

createSlider('reviews')
