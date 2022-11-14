const fs = require('fs/promises');
const path = require('path');
console.log('[MDx]	[INFO]	Checking configurations...');

if (hexo.config.theme_config.search?.path && hexo.config?.search.path !== hexo.config.theme_config.search?.path) {
	console.log('[MDx]	[ERROR]	Search Database is not configured properly. Please chech your settings.');
}
const primaryColorMappings = {
	red: '#f44336',
	pink: '#e91e63',
	purple: '#9c27b0',
	'deep-purple': '#673ab7',
	indigo: '#3f51b5',
	blue: '#2196f3',
	'light-blue': '#03a9f4',
	cyan: '#00bcd4',
	teal: '#009688',
	green: '#4caf50',
	'light-green': '#8bc34a',
	lime: '#cddc39',
	yellow: '#ffeb3b',
	amber: '#ffc107',
	orange: '#ff9800',
	'deep-orange': '#ff5722',
	brown: '#795548',
	grey: '#9e9e9e',
	'blue-grey': '#607d8b',
};
const accentColorMappings = {
	red: '#ff5252',
	pink: '#ff4081',
	purple: '#e040fb',
	'deep-purple': '#7c4dff',
	indigo: '#536dfe',
	blue: '#448aff',
	'light-blue': '#40c4ff',
	cyan: '#18ffff',
	teal: '#64ffda',
	green: '#69f0ae',
	'light-green': '#b2ff59',
	lime: '#eeff41',
	yellow: '#ffff00',
	amber: '#ffd740',
	orange: '#ffab40',
	'deep-orange': '#ff6e40',
};
hexo.locals.set('themePrimaryColor', primaryColorMappings[hexo.config.theme_config.color?.primary || 'indigo']);
hexo.locals.set('themeAccentColor', accentColorMappings[hexo.config.theme_config.color?.primary || 'pink']);
hexo.locals.set('linkPrefix', () => {
	let linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/';
	switch (hexo.config.theme_config.cdn_provider) {
		case 'cdnjs':
			linkPrefix = 'https://cdnjs.cloudflare.com/ajax/libs/%package%/%version%/';
			break;
		case 'jsdelivr':
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/';
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
			linkPrefix = 'https://unpkg.com/%package%@%version%/';
			break;
		case 'true':
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/';
			break;
		case true:
			linkPrefix = 'https://cdn.jsdelivr.net/npm/%package%@%version%/';
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
	async function () {
		if (hexo.config.theme_config.cdn_provider !== false && hexo.config.theme.cdn_provider !== 'false') {
			console.log('[MDx]	[INFO]	CDN Provider is enabled, deleting mdui & qrcodejs.');
			await fs.rm(path.join(hexo.config.public_dir, 'mdui'), { recursive: true, force: true });
			await fs.rm(path.join(hexo.config.public_dir, 'qrcodejs'), { recursive: true, force: true });
		}
		if (hexo.config.theme_config.online_check?.enable !== true || (hexo.config.theme_config.online_check?.enable === true && (hexo.config.theme_config.online_check?.inaccurate_detection || true) === true)) {
			console.log('[MDx]	[INFO]	Online Check is disabled or set to inaccurate mode, deleting ping file.');
			await fs.rm(path.join(hexo.config.public_dir, 'ping'), { recursive: true, force: true });
		}
	},
	1
);
