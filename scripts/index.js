const fs = require('fs');
const path = require('path');
console.log('[MDx]	[INFO]	Checking configurations...');

if (hexo.config.theme_config.search.path && hexo.config.search.path !== hexo.config.theme_config.search.path) {
	console.log('[MDx]	[ERROR]	Search Database is not configured properly. Please chech your settings.');
}
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
