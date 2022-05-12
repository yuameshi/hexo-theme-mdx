/* global hexo */
// Usage: {% mdx_github_info_card repoOwner repoName %}
//
function ghInfo(args) {
	const owner = args[0];
	const repo = args[1];
	return `
	<div
		class="mdx-github-card"
		data-owner="${owner}"
		data-repo="${repo}"
	>
		<div class="mdx-github-info-card">
			<div class="upperLayer">
				<a href="https://github.com/" rel="noreferrer nofollow" target="_blank" class="gh-link" title="GitHub"><svg class="icon mdx-github-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path d="M950.93 512q0 143.43-83.75 257.97T650.9 928.55q-15.43 2.85-22.6-4.02t-7.17-17.12V786.87q0-55.44-29.7-81.11 32.55-3.44 58.6-10.32t53.68-22.3T750 635.1t30.28-59.98 11.7-86.01q0-69.12-45.13-117.7 21.14-52-4.53-116.58-16.02-5.12-46.3 6.29t-52.6 25.16l-21.72 13.68Q568.54 285.1 512 285.1t-109.71 14.85q-9.15-6.3-24.29-15.43t-47.69-22.02-49.15-7.68q-25.16 64.58-4.02 116.59Q232 419.99 232 489.1q0 48.56 11.7 85.72t30 59.98 46 38.25 53.68 22.3 58.6 10.32q-22.83 20.56-28.02 58.88-12 5.7-25.75 8.56t-32.55 2.85-37.45-12.29T276.48 728q-10.83-18.28-27.72-29.7t-28.3-13.67l-11.42-1.69q-12 0-16.6 2.56t-2.85 6.59 5.12 7.97 7.46 6.88l4.02 2.85q12.58 5.7 24.87 21.72t18 29.11l5.7 13.17q7.46 21.72 25.16 35.1T318.17 826t39.72 4.03 31.74-1.98l13.17-2.27q0 21.73.29 50.84t.3 30.86q0 10.32-7.47 17.12t-22.82 4.02Q240.57 884.6 156.82 770.05T73.07 512.07q0-119.44 58.88-220.3t159.74-159.75T512 73.14t220.3 58.88 159.75 159.75 58.88 220.3z" fill="#fff"></path></svg> <span>GitHub</span></a>
			</div>
			<div class="middleLayer">
				<a class="repoLink" rel="nofollow" href="https://github.com/${owner}/${repo}">
					<span class="owner">${owner}/</span>${repo}
				</a>
				<div class="repoDescription">
					<div class="mdui-spinner"></div>
				</div>
			</div>
			<div class="lowerLayer">
				<div class="stars">
					★ ???
				</div>
				<a class="viewOnGitHub" rel="nofollow" href="https://github.com/${owner}/${repo}">
					<i class="mdui-icon material-icons">&#xe315;</i>
				</a>
			</div>
		</div>
	</div>
	`;
}
hexo.extend.tag.register('mdx_github_info_card', ghInfo, { ends: false });