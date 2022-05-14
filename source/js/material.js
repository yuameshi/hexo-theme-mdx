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
	if (
		(window.scrollY || window.pageYOffset) >
		(window.innerHeight || window.screenY) / 2
	) {
		if (
			document.querySelector('#appBarTitle').innerText !=
			document.querySelector('#pageTitle').innerText
		) {
			document.querySelector('#appBarTitle').innerText =
				document.querySelector('#pageTitle').innerText;
		}
		document
			.querySelector('button#goToTopBtn')
			.classList.remove('mdui-fab-hide');
	} else {
		if (
			document.querySelector('#appBarTitle').innerText !=
			document
				.querySelector('#appBarTitle')
				.getAttribute('data-original-title')
		) {
			document.querySelector('#appBarTitle').innerText = document
				.querySelector('#appBarTitle')
				.getAttribute('data-original-title');
		}
		document
			.querySelector('button#goToTopBtn')
			.classList.add('mdui-fab-hide');
	}
});

function pageInit() {
	paginationInit();
	initBackToTopBtn();
	if (
		window.matchMedia('(prefers-color-scheme: dark)').matches &&
		(localStorage.getItem('darkMode') || 'true') === 'true'
	) {
		document.body.classList.add('mdui-theme-layout-dark');
	}
	document.body.classList.remove('mdui-theme-layout-auto');
	document
		.querySelector('#nightModeToggle')
		.addEventListener('click', function () {
			document.body.classList.toggle('mdui-theme-layout-dark');
			localStorage.setItem(
				'darkMode',
				document.body.classList
					.contains('mdui-theme-layout-dark')
					.toString()
			);
		});
	var searchDatabase = new XMLHttpRequest();
	searchDatabase.open('GET', '/search.json', true);
	searchDatabase.onload = function () {
		window._mdxSearchDatabase = JSON.parse(searchDatabase.responseText);
	};
	searchDatabase.send();
	document
		.querySelector('div#searchDialog')
		.addEventListener('closed.mdui.dialog', function () {
			document.querySelector('#searchInputBox').value = '';
			document.querySelector('div#searchResultContainer').innerHTML = '';
		});
	document
		.querySelector('div#searchDialog')
		.addEventListener('opened.mdui.dialog', function () {
			document.querySelector('#searchInputBox').focus();
		});
	document
		.querySelector('input#searchInputBox')
		.addEventListener('change', function () {
			if (typeof window._mdxSearchDatabase !== 'object') {
				document.querySelector('#searchResultContainer').innerHTML =
					"It seemed that MDx's search database is not loading properly, try refreshing the page<br />看上去MDx的搜索数据库并未正确加载，请尝试刷新页面";
				return;
			}
			var searchInput = this.value;
			var searchResultContainer = document.querySelector(
				'div#searchResultContainer'
			);
			searchResultContainer.innerHTML = '';
			for (var i = 0; i < window._mdxSearchDatabase.length; i++) {
				if (
					window._mdxSearchDatabase[i].content.indexOf(
						searchInput
					) !== -1 ||
					window._mdxSearchDatabase[i].title.indexOf(searchInput) !==
						-1
				) {
					var searchResultItem = document.createElement('div');
					searchResultItem.classList.add('searchResultItem');
					var searchResultTitle = document.createElement('a');
					searchResultTitle.href = window._mdxSearchDatabase[i].url;
					searchResultTitle.innerText =
						window._mdxSearchDatabase[i].title;
					searchResultTitle.classList.add('searchResultItemTitle');
					searchResultTitle.classList.add('mdui-text-color-theme');
					searchResultItem.appendChild(searchResultTitle);
					var searchResultContent = document.createElement('div');
					searchResultContent.classList.add(
						'searchResultItemContent'
					);
					searchResultContent.classList.add(
						'mdui-text-color-theme-secondary'
					);
					var firstMatchedContent = Math.max(
						window._mdxSearchDatabase[i].content.indexOf(
							searchInput
						) - 5,
						0
					);
					searchResultContent.innerText = window._mdxSearchDatabase[
						i
					].content.substr(firstMatchedContent, 50);
					searchResultContent.innerHTML =
						searchResultContent.innerHTML.replace(
							new RegExp(searchInput, 'gim'),
							'<span class="searchResultItemMatched">' +
								searchInput +
								'</span>'
						);
					searchResultItem.appendChild(searchResultContent);
					searchResultContainer.appendChild(searchResultItem);
				}
			}
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
