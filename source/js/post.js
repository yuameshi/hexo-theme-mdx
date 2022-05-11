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
	document
		.querySelector('#readOnOtherDeviceBtn')
		.addEventListener('click', () => {
			var dom = document.querySelector('#mdx_read_on_other_device');
			if (typeof QRCode !== 'function') {
				dom.innerHTML = 'Error: QRCode.js is not loaded.';
				return;
			}
			dom.innerHTML = '';
			var url = new URL(location.href);
			new QRCode(dom, {
				text: url.origin + url.pathname + '?pos=' + window.scrollY,
				width: 128,
				height: 128,
				colorDark: '#000000',
				colorLight: '#ffffff',
				useSVG: true,
				correctLevel: QRCode.CorrectLevel.H,
			});
			dom.querySelector('img').style.padding = '20px';
		});
	if (new URL(location.href).searchParams.get('pos') !== null) {
		window.scroll({
			top: Number(new URL(location.href).searchParams.get('pos')),
			left: 0,
			behavior: 'smooth',
		});
	}
	// init table
	const postPage = document.querySelector('#mainContent > div.postPage');
	var tables = postPage.querySelectorAll('table');
	for (let i = 0; i < tables.length; i++) {
		tables[i].classList.add('mdui-table');
	}
}
