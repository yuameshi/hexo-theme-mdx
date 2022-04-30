document.addEventListener('DOMContentLoaded', function () {
	paginationInit();
	initBackToTopBtn();
});

window.addEventListener('load', function () {
	paginationInit();
	initBackToTopBtn();
	var pageLoadProgressIndicator = document.querySelector(
		'#pageLoadProgressIndicator'
	);
	if (pageLoadProgressIndicator.parentElement) {
		pageLoadProgressIndicator.parentElement.removeChild(
			pageLoadProgressIndicator
		);
	}
});

document.addEventListener('scroll', function () {
	if ((window.scrollY || window.pageYOffset) > window.screenY / 2) {
		document
			.querySelector('button#goToTopBtn')
			.classList.remove('mdui-fab-hide');
	} else {
		document
			.querySelector('button#goToTopBtn')
			.classList.add('mdui-fab-hide');
	}
});

function initBackToTopBtn() {
	if (!window.ifInitiatedGoToTopBtn) {
		document
			.querySelector('button#goToTopBtn')
			.addEventListener('click', function () {
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			});
		window.ifInitiatedGoToTopBtn = true;
	}
}

function paginationInit() {
	if (document.querySelector('div.pagination')) {
		var paginations = document.querySelectorAll(
			'div#mainContent > div.pagination > *'
		);
		for (var i = 0; i < paginations.length; i++) {
			if (paginations[i].classList.contains('current') == false) {
				if (paginations[i].classList.contains('space') == false) {
					paginations[i].classList.add('mdui-ripple');
				}
			} else {
				paginations[i].classList.add('mdui-color-theme');
			}
		}
		document
			.querySelector(
				'div#mainContent > div.pagination > span.current.page-number'
			)
			.classList.add('mdui-ripple', 'mdui-color-theme');
	}
}