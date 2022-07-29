const fs = require('fs');
const path = require('path');
console.log('[MDx]	[INFO]	Checking configurations...');

if (hexo.config.theme_config.search.path && hexo.config.search.path !== hexo.config.theme_config.search.path) {
	console.log('[MDx]	[ERROR]	Search Database is not configured properly. Please chech your settings.');
}

hexo.locals.set('linkPrefix', ()=>{
	let linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/dist/';
	switch (hexo.config.theme_config.cdn_provider) {
		case 'cdnjs':
			linkPrefix = 'https://cdnjs.cloudflare.com/ajax/libs/%package%/%version%/';
			break;
		case 'jsdelivr':
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/dist/';
			break;
		case 'staticfile':
			linkPrefix = 'https://cdn.staticfile.org/%package%/%version%/';
			break;
		case 'bootcdn':
			linkPrefix = 'https://cdn.bootcdn.net/ajax/libs/%package%/%version%/';
			break;
		case 'bytedance':
			linkPrefix = 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/%package%/%version%/';
			break;
		case 'unpkg':
			linkPrefix = 'https://unpkg.com/%package%@%version%/dist/';
			break;
		case 'baomitu':
			linkPrefix = 'https://lib.baomitu.com/%package%/%version%/';
			break;
		case 'true':
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/dist/';
			break;
		case true:
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/dist/';
			break;
		case 'false':
			linkPrefix = '/%package%/';
			break;
		case false:
			linkPrefix = '/%package%/';
			break;
		default:
			break;
	}
	return linkPrefix;
});

hexo.extend.filter.register(
	'before_exit',
	function () {
		if (hexo.config.theme_config.cdn_provider !== false && hexo.config.theme.cdn_provider !== 'false') {
			console.log('[MDx]	[INFO]	CDN Provider is enabled, deleting mdui & qrcodejs.');
			fs.rmSync(path.join(hexo.config.public_dir, 'mdui'), { recursive: true, force: true });
			fs.rmSync(path.join(hexo.config.public_dir, 'qrcodejs'), { recursive: true, force: true });
		}
		if (hexo.config.theme_config.online_check.enable !== true) {
			console.log('[MDx]	[INFO]	Online Check is disabled, deleting ping file.');
			fs.rmSync(path.join(hexo.config.public_dir, 'ping'), { recursive: true, force: true });
		}
	},
	1
);

