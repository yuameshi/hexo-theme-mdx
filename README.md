You are reading English documentation.

[打开中文文档](./README.zh.md)

# hexo-theme-mdx

A hexo theme with material design.

# Browser compatibility
| Browser              | Compatibility    |
|----------------------|------------------|
| Chrome               | ✔ Last 5 version |
| Firefox              | ✔ Last 5 version |
| Edge Chromium        | ✔ Last 5 version |
| Edge EdgeHTML        | ? Unknown        |
| Safari               | ✔ Last 5 version |
| Internet Explorer 11 | Partial support  |
| Internet Explorer 10 | Basic support    |

# Getting Started
## Step 1: Install MDx
```bash
# use npm(recommended) or yarn
$ npm install hexo-theme-mdx --save
# or use git clone or git submodule (not recommended)
# You can remove '-b' to get the latest development version(Unstable)
# To get the full commit history of the repository, remove '--depth 1'
$ git clone https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx -b <版本号> --depth 1
# If you executed the previous command, then this command does not need to be executed
$ git submodule add https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx
```
## Step 2: Enable MDx
You can use the Hexo command to change the theme to MDx
```bash
hexo config theme mdx
```
You can also  change `_config.yml` directly
```diff yaml
- theme: previous theme
+ theme: mdx
```

# Configuration

## Step1: Download configuration file

```bash
# Bash
$ wget https://cdn.jsdelivr.net/gh/Yuameshi/hexo-theme-mdx@main/_config.yml -O _config.mdx.yml
```
```powershell
# PowerShell
(New-Object System.Net.WebClient).DownloadFile("wget https://cdn.jsdelivr.net/gh/Yuameshi/hexo-theme-mdx@main/_config.yml", "_config.mdx.yml")
```
or copy contents below to `_config.mdx.yml`

WARNING: If you installed the theme via git, you should delete `_config.yml` in the theme directory.

## Step2: Edit configuration file to your needs
```yaml
# Theme settings
use_cdn: true # use CDN to boost your site(CDN Provider:cdn.jsdelivr.net)

# Theme colors
# Check out all the colors here: https://www.mdui.org/docs/color
color:
  primary: indigo
  accent: pink

# GPDR Cookie alert(HTML Tag supported)
# This will show a snackbar at the right bottom of the page
gdpr_cookie_alert:
  enable: true
  text: This site uses cookies to improve your experience.

header_picture_link: # Link to header picture
favicon: # Link to favicon.ico
excerpt_length: 250 # Auto-generated excerpt length, <!-- more --> is supported

# Search settings(depends on "hexo-generator-search")
# Need to be configured in JSON format, the path is '/search.json'
# Currently this setting is useless
search:
  path: /search.json

# About field at the drawer menu
drawer_about:
  enable: true
  avatar: # Link to avatar image
  name: # Name
  slogan: # Slogan
  background: # Link to background image
  is_dark: true # Whether the background is dark-colored or not

# Drawer menu list (Nested lists are not supported)
# Format: Link name: Link || Icon
# Check out all the icons at https://www.mdui.org/docs/material_icon
drawer:
  Home: / || &#xe88a;
  MDx: https://github.com/Yuameshi/hexo-theme-mdx || &#xe243;
  GitHub: https://github.com/Yuameshi || &#xe149;
  About: /about || &#xe88e;

# Text which will inserted at the end of the article.
# '%title%' refers to title link of current post.
# '%link%' refers to permalink link of current post
passage_end_tag:
  enabled: true
  text: 'END'

# Comment system settings
comment:
  use: 
  # gitalk configuration refers to https://github.com/gitalk/gitalk/
  gitalk:
    clientID: 
    clientSecret: 
    repo: 
    owner: 
    admin: ['']
    distractionFreeMode: true
  # configuration of utterances refers to https://utteranc.es/
  utterances:
    repo: 
    issue_term: 
    lable: 
    theme: 

# Analytics settings
analytics:
  # Google Analytics configuration refers to https://analytics.google.com/
  google:
    enabled: false
    tracking_id: 
  # Cloudflare Web Analytics configuration refers to https://developers.cloudflare.com/analytics/web-analytics
  cloudflare:
    enabled: false
    token: 

footer:
  since: # When the site was launched
  copyrights: true # Show '© %SITE_NAME%' in footer
  hexo: true # Show "Powered by Hexo" in the footer
  theme: true	# Show "Themed MDx" in footer
  text: # Text to show on the footer
  contact: # Social media links
    MDx: https://github.com/Yuameshi/hexo-theme-mdx
    GitHub: https://github.com/Yuameshi
  miit_icp: # Link to MIIT ICP
  moe_icp: # Link to MOE ICP
```