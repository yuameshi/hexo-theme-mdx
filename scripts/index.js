const fs = require('fs');
const path = require('path');
console.log('Checking configurations...');

if (hexo.config.search.path !== 'search.json') {
	console.log('Search Database is not configured properly. Please edit it to `search.json`.');
}
hexo.extend.filter.register(
	'before_exit',
	function () {
		if (hexo.config.theme.cdn_provider !== false && hexo.config.theme.cdn_provider !== 'false') {
			console.log('CDN enabled, deleting mdui folder.');
			fs.rmSync(path.join(hexo.config.public_dir, 'mdui'), { recursive: true, force: true });
		}
	},
	0
);
