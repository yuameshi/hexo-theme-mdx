document.addEventListener('DOMContentLoaded', function () {
	document
		.querySelectorAll('#mainContent > div.pageInition > *')
		.forEach(function (el) {
			if (el.classList.contains('current') == false) {
				if (el.classList.contains('space') == false) {
					el.classList.add('mdui-ripple');
				}
			} else {
				el.classList.add('mdui-color-theme');
			}
		});
	document
		.querySelector('button#goToTopBtn')
		.addEventListener('click', function () {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		});
});

window.addEventListener('load', function () {
	document.querySelector('#pageLoadProgressIndicator').remove();
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
