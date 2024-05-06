const accordions = document.querySelectorAll('[datatype="accordion"]')

accordions.forEach(function (accordion) {
    const btn = accordion.querySelector('[data-action="accordion-btn"]')
    const btnSvg = btn.querySelector('svg')
    const content = accordion.querySelector('[datatype="accordion-content"]')

    btn.addEventListener('click' ,function () {
        btnSvg.classList.toggle('nd_support_svg_close')
        content.classList.toggle('nd_support_ans_visible')
    })
})
