const list = document.querySelector('[datatype="slider-list"]');
const items = list.querySelectorAll('[datatype="slider-item"]');
const btnWrap = document.querySelector('[datatype="btn-wrap"]');

const btnPrevious = btnWrap.querySelector('[data-action="slider-btn-previous"]');
const btnNext = btnWrap.querySelector('[data-action="slider-btn-next"]');

const currentSlideSpan = btnWrap.querySelector('[data-value="slider-current-slide"]');
const allSlidesSpan = btnWrap.querySelector('[data-value="slider-all-slides"]');

let currentSlide = 0;
const allSlides = items.length;

function numberNormalize(num) {
    return  num.toString().padStart(2, '0');
}

currentSlideSpan.textContent = numberNormalize(currentSlide + 1);
allSlidesSpan.textContent = numberNormalize(allSlides);

btnPrevious.addEventListener('click', function () {
    if (currentSlide <= 0) return;

    items[currentSlide].classList.add('nd_none');
    currentSlide -= 1;
    items[currentSlide].classList.remove('nd_none');

    currentSlideSpan.textContent = numberNormalize(currentSlide + 1);

    if (currentSlide < allSlides -1) {
        btnNext.disabled = false;
    }

    if (currentSlide <= 0) {
        btnPrevious.disabled = true;
    }
});

btnNext.addEventListener('click', function () {
    if (currentSlide >= allSlides -1) return;

    items[currentSlide].classList.add('nd_none');
    currentSlide += 1;
    items[currentSlide].classList.remove('nd_none');

    currentSlideSpan.textContent = numberNormalize(currentSlide + 1);

    if (currentSlide >= allSlides -1) {
        btnNext.disabled = true;
    }

    if (currentSlide > 0) {
        btnPrevious.disabled = false;
    }
});
