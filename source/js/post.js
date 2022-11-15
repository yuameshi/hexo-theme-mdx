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
	document.getElementById('readOnOtherDeviceBtn').addEventListener('click', function () {
		var dom = document.getElementById('mdx_read_on_other_device');
		if (typeof QRCode !== 'function') {
			dom.innerHTML = 'Error: QRCode.js is not loaded.';
			return;
		}
		dom.innerHTML = '';
		var url = new URL(location.href);
		new window.QRCode(dom, {
			text: url.origin + url.pathname + '?pos=' + window.scrollY,
			width: 128,
			height: 128,
			colorDark: '#000000',
			colorLight: '#ffffff',
			useSVG: true,
			correctLevel: window.QRCode.CorrectLevel.H,
		});
		dom.getElementsByTagName('canvas')[0].style.padding = '20px 20px 0 20px';
		dom.getElementsByTagName('img')[0].style.padding = '20px';
	});
	var imgs = postPage.getElementsByTagName('img');
	var imgBox = document.getElementById('imgBox');
	function addImgDesc(newElement, targetElement) {
		var parent = targetElement.parentElement;
		if (parent.lastChild == targetElement) {
			parent.appendChild(newElement);
		} else {
			parent.insertBefore(newElement, targetElement.nextSibling);
		}
	}
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.cursor = 'zoom-in';
		imgs[i].addEventListener('click', function (e) {
			imgBox.classList.add('show');
			document.getElementById('imgBoxImage').setAttribute('src', e.target.getAttribute('src'));
			document.getElementById('imgBoxImage').setAttribute('alt', e.target.getAttribute('alt') || '');
			document.getElementById('imgBoxDescription').innerText = e.target.getAttribute('alt') || '';
		});
		var imgDesc = document.createElement('div');
		imgDesc.innerText = imgs[i].getAttribute('alt') || '';
		if (imgDesc.innerText === '') {
			imgDesc.innerText = imgs[i].getAttribute('title') || '';
		}
		imgDesc.classList.add('imgDesc');
		addImgDesc(imgDesc, imgs[i]);
	}
	imgBox.addEventListener('click', function () {
		imgBox.classList.add('removing');
		setTimeout(() => {
			imgBox.classList.remove('show');
			imgBox.classList.remove('removing');
		}, 150);
	});
	if (new URL(location.href).searchParams.get('pos') !== null) {
		window.scroll({
			top: Number(new URL(location.href).searchParams.get('pos')),
			left: 0,
			behavior: 'smooth',
		});
	}
	var postPage = document.getElementById('postPage');
	// generate wechat share qrcode
	document.getElementById('shareToWechatQRCodeDialog').addEventListener('open.mdui.dialog', function () {
		document.getElementById('shareToWechatQRCodeContainer').innerHTML = '';
		var url;
		if (typeof URL === 'function') {
			url = new URL(location.href);
			url = url.origin + url.pathname;
		} else {
			url = location.href;
		}
		new window.QRCode(document.getElementById('shareToWechatQRCodeContainer'), {
			text: url,
			width: 250,
			height: 250,
			colorDark: '#000000',
			colorLight: '#ffffff',
			useSVG: true,
			correctLevel: window.QRCode.CorrectLevel.H,
		});
	});

	document.getElementById('generateSharePictureDialog').addEventListener('open.mdui.dialog', function () {
		document.getElementById('generateSharePictureDialogContainer').innerHTML = '';
		var qrCodeContainer = document.getElementById('mdx_read_on_other_device');
		qrCodeContainer.innerHTML = '';
		var qrcode = new window.QRCode(qrCodeContainer, {
			text: shareMetadata.url,
			width: 60,
			height: 60,
			colorDark: '#000000',
			colorLight: '#f5f5f5',
			useSVG: true,
			correctLevel: window.QRCode.CorrectLevel.H,
		});
		qrcode.makeCode(shareMetadata.url);
		var headerPicURL = document.getElementById('pageTitleContainer').style.getPropertyValue('background-image').split('"')[1];
		var headerPicXHR = new XMLHttpRequest();
		headerPicXHR.open('GET', headerPicURL, true);
		headerPicXHR.responseType = 'blob';
		headerPicXHR.send();
		headerPicXHR.addEventListener('load', function () {
			const img = new Image();
			img.src = URL.createObjectURL(headerPicXHR.response);
			img.addEventListener('load', function () {
				const canvas = document.createElement('canvas');
				canvas.classList.add('mdui-center');
				const ctx = canvas.getContext('2d');
				canvas.width = 470;
				const width = 470;
				const imgWidth = width;
				const imgHeight = (img.height * imgWidth) / img.width;
				const lines = Math.round(ctx.measureText(shareMetadata.description).width / (width - 30));
				const descHeight = lines * 20;
				canvas.height = imgHeight + descHeight + 175;
				ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
				(function drawBlogTitle(blogTitle) {
					ctx.fillStyle = '#fff';
					ctx.textBaseline = 'top';
					ctx.textAlign = 'left';
					ctx.font = "bold 24px 'Roboto'";
					ctx.fillText(blogTitle, 15, 20);
				})(shareMetadata.blogName);

				(function drawPostDate(year, month, day) {
					ctx.fillStyle = '#fff';
					ctx.textBaseline = 'top';
					ctx.textAlign = 'right';
					// draw day
					ctx.font = "48px 'Roboto'";
					ctx.fillText(day, imgWidth - 17, 20);
					ctx.fillStyle = '#ffffff99';
					// draw hr
					ctx.fillRect(imgWidth - 75, 70, 60, 3);
					// draw year/month
					ctx.font = "16px 'Roboto'";
					ctx.fillText(`${year}/${month}`, imgWidth - 17, 80);
				})(...shareMetadata.postDate.split('-'));

				(function drawTitle(name) {
					var linearGradient = ctx.createLinearGradient(0, imgHeight, 0, imgHeight - 100);
					linearGradient.addColorStop(0, '#000');
					linearGradient.addColorStop(1, '#00000000');
					ctx.fillStyle = linearGradient;
					ctx.fillRect(0, imgHeight, width, -100);
					ctx.fillStyle = '#fff';
					ctx.font = "36px 'Roboto'";
					ctx.textBaseline = 'bottom';
					ctx.textAlign = 'left';
					ctx.fillText(name, 15, imgHeight - 15);
				})(shareMetadata.title);

				(function drawDiscription(desc) {
					ctx.fillStyle = '#000';
					ctx.textBaseline = 'top';
					ctx.textAlign = 'left';
					ctx.font = "20px 'Roboto'";
					let arrText = desc.split('');
					let line = '';
					let yCoord = imgHeight + 15;
					for (let n = 0; n < arrText.length; n++) {
						let testLine = line + arrText[n];
						if (ctx.measureText(testLine).width > width - 30 && n > 0) {
							ctx.fillText(line, 15, yCoord);
							line = arrText[n];
							yCoord += 20;
						} else {
							line = testLine;
						}
					}
					ctx.fillText(line, 15, yCoord);
				})(shareMetadata.description);

				(function drawQRBorder() {
					ctx.fillStyle = '#f5f5f5';
					ctx.strokeStyle = '#f5f5f5';
					ctx.lineJoin = 'round';
					ctx.textBaseline = 'middle';
					ctx.textAlign = 'left';
					ctx.lineWidth = 15;
					ctx.strokeRect(20, canvas.height - 20, width - 40, -75);
					ctx.fillRect(20, canvas.height - 20, width - 40, -75);
					ctx.fillStyle = '#969696';
					ctx.font = "18px 'Roboto'";
					ctx.fillText(shareMetadata.scan, 30, canvas.height - 20 - 35);
				})();

				(function drawQRCode() {
					ctx.drawImage(qrcode._oDrawing._elCanvas, width - 85, canvas.height - 13 - 75);
				})();
				document.getElementById('saveSharePic').addEventListener('click', function () {
					const a = document.createElement('a');
					a.href = canvas.toDataURL('image/png');
					a.download = `${shareMetadata.title}-${shareMetadata.blogName}.png`;
					a.click();
				});
				document.getElementById('generateSharePictureDialogContainer').appendChild(canvas);
			});
		});
	});
	// init table
	var tables = postPage.getElementsByTagName('table');
	for (var k = 0; k < tables.length; k++) {
		tables[k].classList.add('mdui-table');
	}
	// init GitHub info card
	var githubInfoCards = postPage.getElementsByClassName('mdx-github-card');
	for (var j = 0; j < githubInfoCards.length; j++) {
		initGHInfoCard(githubInfoCards[j]);
	}
}

function initGHInfoCard(cardElement) {
	console.log(cardElement);
	var owner = cardElement.getAttribute('data-owner');
	var repo = cardElement.getAttribute('data-repo');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/repos/' + owner + '/' + repo, true);
	xhr.onload = function () {
		var data = JSON.parse(xhr.responseText);
		var description = data.description;
		var stars = data.stargazers_count;
		cardElement.children[0].children[1].children[1].innerText = description;
		cardElement.children[0].children[2].children[0].innerText = '★' + stars;
	};
	xhr.send();
}

document.addEventListener('scroll', function () {
	if ((window.scrollY || window.pageYOffset) > (window.innerHeight || window.screenY) / 2) {
		document.getElementById('mdxReadProgress').classList.remove('hide');
		var strokeDashOffset = 166.5 + (166.5 * (window.scrollY || window.pageYOffset)) / document.querySelector('#mainContent > div > div.mdui-card-content.mdui-typo').clientHeight;
		document.getElementById('mdxReadProgressRing').style.setProperty('stroke-dashoffset', Math.min(strokeDashOffset, 333));
	} else {
		document.getElementById('mdxReadProgress').classList.add('hide');
	}
});
