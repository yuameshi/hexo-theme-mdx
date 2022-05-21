console.log('Checking configurations...');

if (hexo.config.search.path !== 'search.json') {
	console.log(
		'Search Database is not configured properly. Please edit it to `search.json`.'
	);
}
