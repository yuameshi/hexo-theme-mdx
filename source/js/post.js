document.addEventListener('DOMContentLoaded', function () {
	window.postInited = true;
	initPost();
});

window.addEventListener('load', function () {
	if (window.postInited !== true) {
		initPost();
	}
});
function initPost() {
	// init table
	const postPage = document.querySelector('#mainContent > div.postPage');
	var tables = postPage.querySelectorAll('table');
	for (let i = 0; i < tables.length; i++) {
		tables[i].classList.add('mdui-table');
	}
}
