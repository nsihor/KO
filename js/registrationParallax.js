const wrapper = document.querySelector('[datatype="wrapper"]');
const main = document.querySelector('[datatype="main"]');
const list = document.querySelector('[datatype="list"]');

function calculateWrapperH() {
    const position = window.getComputedStyle(wrapper).getPropertyValue('position');
    if ( position === 'relative') {
        wrapper.style.height = `${list.offsetHeight}px`;
    } else {
        wrapper.style.height = '100%';
    }
}

function calculateTop(s) {
    const speed = 0.8;
    const gap = (s * speed) - 280;
    const maxGap = wrapper.offsetHeight - main.offsetHeight;

    if (gap > maxGap) {
        return `${maxGap}px`
    }

    if (gap <= 0) {
        return 0;
    }

    return `${gap}px`;
}

calculateWrapperH();

window.addEventListener('resize', calculateWrapperH);

window.addEventListener('scroll', function () {
    let s = window.pageYOffset || document.documentElement.scrollTop;

    const position = window.getComputedStyle(wrapper).getPropertyValue('position');
    if ( position === 'static') {
        main.style.top = 0;
        return
    }

    if (s > 280) {
        main.style.top = calculateTop(s);
    }
});
