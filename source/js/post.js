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
	var postPage = document.querySelector('#mainContent > div.postPage');
	// init table
	var tables = postPage.querySelectorAll('table');
	for (var i = 0; i < tables.length; i++) {
		tables[i].classList.add('mdui-table');
	}
	// init github info card
	var githubInfoCards = postPage.querySelectorAll('div.mdx-github-card');
	for (var j = 0; j < githubInfoCards.length; j++) {
		initGHInfoCard(githubInfoCards[j]);
	}
}

function initGHInfoCard(cardElement) {
	console.log(cardElement);
	var owner = cardElement.getAttribute('data-owner');
	var repo = cardElement.getAttribute('data-repo');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `https://api.github.com/repos/${owner}/${repo}`, true);
	xhr.onload = function () {
		var data = JSON.parse(xhr.responseText);
		var description = data.description;
		var stars = data.stargazers_count;
		cardElement.children[0].children[1].children[1].innerText = description;
		cardElement.children[0].children[2].children[0].innerText = '★' + stars;
	};
	xhr.send();
}
