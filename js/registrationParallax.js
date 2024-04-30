// const wrapper = document.querySelector('[datatype="wrapper"]');
// const main = document.querySelector('[datatype="main"]');
// const list = document.querySelector('[datatype="list"]');
//
// const position = window.getComputedStyle(wrapper).getPropertyValue('position');
// if ( position === 'relative') wrapper.style.height = `${list.offsetHeight}px`;
//
// let lastScrollTop = 0;
//
// window.addEventListener('scroll', function (e) {
//     let st = window.pageYOffset || document.documentElement.scrollTop;
//
//     if (st > lastScrollTop) {
//         // Прокручується вниз
//         if (st > 280) {
//             const currentTop = parseFloat(window.getComputedStyle(main).getPropertyValue('top'));
//             main.style.top = `${currentTop + 7}px`;
//         }
//     } else {
//         // Прокручується вгору
//         const currentTop = parseFloat(window.getComputedStyle(main).getPropertyValue('top'));
//         if (currentTop > 0) {
//             main.style.top = `${currentTop - 7}px`;
//         }
//     }
//
//     lastScrollTop = st <= 0 ? 0 : st;
// });
//
//
// //280