const dropDownWrapper = document.querySelector('[data-action="nd_dropdown"]');

const dropDownBtn = dropDownWrapper.querySelector('[data-action="nd_dropdown__button"]')
const dropDownBtnComputedStyle = window.getComputedStyle(dropDownBtn);

const dropDownList = dropDownWrapper.querySelector('[data-action="nd_dropdown__list"]');
const dropDownListItems = dropDownList.querySelectorAll('[data-action="nd_dropdown__list_item"]');

const map = document.querySelector('[data-action="nd_dropdown__map"]')

if (dropDownBtnComputedStyle.display !== 'none') {
	const dropDownBtnDig = dropDownBtn.querySelector('[data-action="nd_dropdown__button_dig"]');
	const dropDownBtnText = dropDownBtn.querySelector('[data-action="nd_dropdown__button_text"]');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('nd_block');
		this.classList.add('nd_dropdown__button__active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			const dig = listItem.querySelector('[data-action="nd_dropdown__list_item_dig"]');
			const text = listItem.querySelector('[data-action="nd_dropdown__list_item_text"]');

			dropDownBtnDig.innerText = dig.innerText;
			dropDownBtnText.innerText = text.innerText;
			dropDownBtn.focus();
			dropDownList.classList.remove('nd_block');

			const value = listItem.getAttribute('data-value');
			map.setAttribute('xlink:href', `./img/svg/map-${value}.svg#map`);
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('nd_dropdown__button__active');
			dropDownList.classList.remove('nd_block');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('nd_dropdown__button__active');
			dropDownList.classList.remove('nd_block');
		}
	});
} else {
	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();

			const value = listItem.getAttribute('data-value');
			map.setAttribute('xlink:href', `./img/svg/map-${value}.svg#map`);

			dropDownListItems.forEach(function (listItemIn) {
				if (listItem === listItemIn) {
					listItemIn.classList.add('nd_coverage_dropdown_list_item_active')
				} else {
					listItemIn.classList.remove('nd_coverage_dropdown_list_item_active')
				}
			})

		});
	});
}
