document.addEventListener('DOMContentLoaded', function () {
	window.dclSciptsLoaded = true;
	pageInit();
});

window.addEventListener('load', function () {
	if (window.dclSciptsLoaded !== true) {
		pageInit();
	}
	var pageLoadProgressIndicator = document.querySelector('#pageLoadProgressIndicator');
	if (pageLoadProgressIndicator.parentElement) {
		pageLoadProgressIndicator.parentElement.removeChild(pageLoadProgressIndicator);
	}
});

document.addEventListener('scroll', function () {
	if ((window.scrollY || window.pageYOffset) > (window.innerHeight || window.screenY) / 2) {
		if (!(document.querySelector('#appBarTitle').innerText === document.querySelector('#pageTitle').innerText)) {
			document.querySelector('#appBarTitle').innerText = document.querySelector('#pageTitle').innerText;
		}
		if (document.querySelector('button#goToTopBtn').classList.contains('mdui-fab-hide')) {
			document.querySelector('button#goToTopBtn').classList.remove('mdui-fab-hide');
		}
	} else {
		if (!(document.querySelector('#appBarTitle').innerText === document.querySelector('#appBarTitle').getAttribute('data-original-title'))) {
			document.querySelector('#appBarTitle').innerText = document.querySelector('#appBarTitle').getAttribute('data-original-title');
		}
		if (!document.querySelector('button#goToTopBtn').classList.contains('mdui-fab-hide')) {
			document.querySelector('button#goToTopBtn').classList.add('mdui-fab-hide');
		}
	}
});

function pageInit() {
	document.querySelector('button#goToTopBtn').addEventListener('click', function () {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	});
	if (document.querySelector('div.pagination')) {
		var paginations = document.querySelectorAll('div#mainContent > div.pagination > *');
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
		document.querySelector('div#mainContent > div.pagination > span.current.page-number').classList.add('mdui-ripple', 'mdui-color-theme', 'mdui-text-color-theme-text');
	}
	if ((window.matchMedia('(prefers-color-scheme: dark)').matches && (localStorage.getItem('darkMode') || 'true') === 'true') || localStorage.getItem('darkMode') === 'true') {
		document.querySelector('#themeColorTag').setAttribute('content', '#212121');
		document.body.classList.add('mdui-theme-layout-dark');
	}
	document.body.classList.remove('mdui-theme-layout-auto');
	document.querySelector('#nightModeToggle').addEventListener('click', function () {
		document.body.classList.toggle('mdui-theme-layout-dark');
		document.querySelector('#themeColorTag').setAttribute('content', document.body.classList.contains('mdui-theme-layout-dark') ? '#212121' : document.querySelector('#themeColorTag').getAttribute('data-theme-primary-color'));
		localStorage.setItem('darkMode', document.body.classList.contains('mdui-theme-layout-dark').toString());
	});
	if (window.search) {
		var searchDatabase = new XMLHttpRequest();
		searchDatabase.open('GET', search.path || '/search.json', true);
		searchDatabase.onload = function () {
			window._mdxSearchDatabase = JSON.parse(searchDatabase.responseText);
		};
		searchDatabase.send();
		document.querySelector('div#searchDialog').addEventListener('closed.mdui.dialog', function () {
			document.querySelector('#searchInputBox').value = '';
			document.querySelector('div#searchResultContainer').innerHTML = '';
		});
		document.querySelector('div#searchDialog').addEventListener('opened.mdui.dialog', function () {
			document.querySelector('#searchInputBox').focus();
		});
		document.querySelector('input#searchInputBox').addEventListener('change', function () {
			if (typeof window._mdxSearchDatabase !== 'object') {
				document.querySelector('#searchResultContainer').innerHTML = search.error;
				return;
			}
			var searchInput = this.value;
			var searchResultContainer = document.querySelector('div#searchResultContainer');
			searchResultContainer.innerHTML = '';
			for (var i = 0; i < window._mdxSearchDatabase.length; i++) {
				var searchInputRegExp = new RegExp(searchInput, 'im');
				var searchInputRegExpGlobal = new RegExp(searchInput, 'gim');
				if (window._mdxSearchDatabase[i].content.match(searchInputRegExp) !== null || window._mdxSearchDatabase[i].title.match(searchInputRegExp) !== null) {
					var searchResultItem = document.createElement('div');
					searchResultItem.classList.add('searchResultItem');
					var searchResultTitle = document.createElement('a');
					searchResultTitle.href = window._mdxSearchDatabase[i].url;
					searchResultTitle.innerText = window._mdxSearchDatabase[i].title;
					searchResultTitle.classList.add('searchResultItemTitle');
					searchResultTitle.classList.add('mdui-text-color-theme');
					searchResultItem.appendChild(searchResultTitle);
					var searchResultContent = document.createElement('div');
					searchResultContent.classList.add('searchResultItemContent');
					searchResultContent.classList.add('mdui-text-color-theme-secondary');
					var firstMatchedContent = Math.max(window._mdxSearchDatabase[i].content.match(searchInputRegExp).index - 10, 0);
					searchResultContent.innerText = window._mdxSearchDatabase[i].content.substr(firstMatchedContent, 150);
					searchResultContent.innerHTML = searchResultContent.innerHTML.replace(searchInputRegExpGlobal, '<span class="searchResultItemMatched">' + searchInputRegExpGlobal.exec(searchResultContent.innerHTML) + '</span>');
					searchResultContent.innerHTML = searchResultContent.innerHTML.replace(/<br>|<br\/>/gims, '');
					searchResultItem.appendChild(searchResultContent);
					searchResultContainer.appendChild(searchResultItem);
				}
			}
			if (searchResultContainer.childElementCount === 0) {
				searchResultContainer.innerHTML = search.noResult.replace('$txt$', searchInput);
			}
		});
	}
	if (window.gpdrCookieAlert) {
		if (localStorage.getItem('checkedGPDRCookieAlert') !== 'true') {
			window.addEventListener('load', function () {
				if (mdui) {
					mdui.snackbar({
						message: gpdrCookieAlert.msg,
						buttonText: gpdrCookieAlert.btnTxt,
						timeout: 0,
						position: 'right-bottom',
						closeOnOutsideClick: false,
						onButtonClick: function () {
							localStorage.setItem('checkedGPDRCookieAlert', 'true');
						},
					});
				}
			});
		}
	}
	if (window.onlineCheck) {
		function displayOfflineAlert() {
			if (mdui && !offlineAlertSnackbar) {
				offlineAlertSnackbar = mdui.snackbar({
					message: onlineCheck.offMsg,
					buttonText: onlineCheck.btnTxt,
					position: 'bottom',
					closeOnOutsideClick: false,
					timeout: 0,
				});
			}
		}
		function displayConnectedMessage() {
			if (offlineAlertSnackbar != undefined) {
				offlineAlertSnackbar.close();
				mdui.snackbar({
					message: onlineCheck.onMsg,
					buttonText: onlineCheck.btnTxt,
					position: 'bottom',
				});
				offlineAlertSnackbar = undefined;
			}
		}
		if ((window.onlineCheck.inaccurateDetection || true) === true) {
			if (navigator.onLine !== true) displayOfflineAlert();
			window.addEventListener('offline', displayOfflineAlert);
			window.addEventListener('online', displayConnectedMessage);
		} else {
			var onlineChecker = new XMLHttpRequest();
			onlineChecker.open('GET', '/ping', true);
			setInterval(function () {
				onlineChecker.abort();
				onlineChecker.open('GET', '/ping', true);
				onlineChecker.send();
				onlineChecker.addEventListener('error', displayOfflineAlert);
				onlineChecker.addEventListener('load', displayConnectedMessage);
			}, 5000);
		}
	}
}
