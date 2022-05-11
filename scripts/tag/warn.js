/* global hexo */
// Usage: {% mdx_warn Title isOpen %} Something {% endmdx_warn %}
//
function warn(args, content) {
	const title = args[0];
	return `
		<blockquote class="mdx-warn">
			<p>
				<i class="mdui-icon material-icons">&#xe002;</i> ${title || 'Warning'}<br>
				<strong>
					${hexo.render.renderSync({ text: content, engine: 'markdown' })}
				</strong>
			</p>
		</blockquote>
	`;
}
hexo.extend.tag.register('mdx_warn', warn, { ends: true });
