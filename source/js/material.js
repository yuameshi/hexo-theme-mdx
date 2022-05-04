document.addEventListener('DOMContentLoaded', function () {
	window.dclSciptsLoaded = true;
	pageInit();
});

window.addEventListener('load', function () {
	if (window.dclSciptsLoaded !== true) {
		pageInit();
	}
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

function pageInit() {
	paginationInit();
	initBackToTopBtn();
	if(
		window.matchMedia('(prefers-color-scheme: dark)').matches
		&& (localStorage.getItem('darkMode') || 'true') === 'true'
	) {
		document.body.classList.add('mdui-theme-layout-dark');
	}
	document.body.classList.remove('mdui-theme-layout-auto');
	document.querySelector('#nightModeToggle').addEventListener('click', function () {
		document.body.classList.toggle('mdui-theme-layout-dark');
		localStorage.setItem('darkMode', document.body.classList.contains('mdui-theme-layout-dark').toString());
	});
}

function initBackToTopBtn() {
	document
		.querySelector('button#goToTopBtn')
		.addEventListener('click', function () {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		});
}

function paginationInit() {
	if (document.querySelector('div.pagination')) {
		var paginations = document.querySelectorAll(
			'div#mainContent > div.pagination > *'
		);
		for (var i = 0; i < paginations.length; i++) {
			if (paginations[i].classList.contains('current') === false) {
				if (paginations[i].classList.contains('space') === false) {
					paginations[i].classList.add('mdui-ripple');
				}
			} else {
				paginations[i].classList.add('mdui-color-theme');
			}
			paginations[i].classList.add('mdui-text-color-theme-text');
		}
		document
			.querySelector(
				'div#mainContent > div.pagination > span.current.page-number'
			)
			.classList.add(
				'mdui-ripple',
				'mdui-color-theme',
				'mdui-text-color-theme-text'
			);
	}
}