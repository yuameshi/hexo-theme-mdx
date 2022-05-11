/* global hexo */
// Usage: {% mdx_fold Title isOpen %} Something {% endmdx_fold %}
//
function fold(args, content) {
	const title = args[0];
	let isOpen = args[1] === 'true';
	if (isOpen) {
		isOpen = ' mdui-panel-item-open';
	} else {
		isOpen = '';
	}
	return `
		<div class="mdui-panel mdui-panel-gapless" mdui-panel>
			<div class="mdui-panel-item${isOpen}">
				<div class="mdui-panel-item-header">
					<div class="mdui-panel-item-title">${title}</div>
					<i class="mdui-panel-item-arrow mdui-icon material-icons">&#xe313;</i>
				</div>
				<div class="mdui-panel-item-body">
					${hexo.render.renderSync({ text: content, engine: 'markdown' })}
				</div>
			</div>
		</div>
	`;
}
hexo.extend.tag.register('mdx_fold', fold, { ends: true });
