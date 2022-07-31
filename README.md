You are reading English documentation.

[打开中文文档](./README.zh.md)

# hexo-theme-mdx

A hexo theme with material design.

# Preview(Links submitting are welcomed)

[Yuameshiの窝](https://www.yuameshi.top/)

[AyaneYeの随手记](https://drbstore.yuameshi.top/)

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

### Note: All MDx releases(including alpha/beta versions) after June 15, 2022 will no longer support Internet Explorer due to the upcoming end of support for Internet Explorer on June 15, 2022.

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
You can also modify `_config.yml` directly
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
# use CDN to boost your site(CDN Providers:true(use jsdelivr)/cdnjs/jsdelivr/staticfile/bootcdn/bytedance/unpkg/false(won't use CDN))
# Note: For Waline and Valine comment systems, using bytedance CDN will automatically fallback to JSDelivr (the library version of this CDN is out of date and not easy to use)
cdn_provider: 'cdnjs'

# Use a specific MIUI version(default:1.0.2, you can modify it to other versions manually)
# Note: Please leave this blank or fill in 1.0.2 when not using CDN, otherwise an error will occur
mdui_version:  

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
  enable: false # default: false
  # If you want to use MDx's i18n feature, please leave them blank
  # 提示文字
  text: This website uses cookies to improve your experience.
  # 按钮文字
  # Button text
  ack_btn: Got it

# Check user's online status
# If you use Service-Worker, etc. in offline mode, you can still read articles, but cannot comment, etc, then this option will be very useful
# MDx will check network connection each 5 secs, and show an alert when network is disconnected.
online_check:
  enable: false # default: false
  # Offline alert text(optional)
  # If you want to use MDx's i18n feature, please leave them blank
  offlineText: It seems you are offline, some features are unavailable, please check your network connection.
  # Online alert text(optional)
  onlineText: You are online, enjoy!
  ack_btn: Got it

# Link to header picture
header_picture_link:
# Link to favicon.ico
favicon: 
# Auto-generated excerpt length, <!-- more --> is supported
excerpt_length: 250 

# Search settings(depends on "hexo-generator-search")
# Need to be configured in JSON format, the path is '/search.json'
search:
  # Enable search(default: true)
  enable: true
  # Search database path(default: './search.json')
  path: /search.json
  # If you want to use MDx's i18n feature, please leave them blank
  # Search box placeholder text(optional)
  placeholder: Search something...
  # No result text($txt$ will be replaced with the search content)(optional)
  no_result: No results found for "$txt$"
  # Search database load error text(optional)
  error: It seemed that MDx's search database is not loading properly, try refreshing the page

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
  # Valine configuration refers to https://valine.js.org/configuration.html
  valine:
    app_id:
    app_key:
    placeholder:
    avatar:
    page_size:
    lang:
    server_urls:
    emoji_cdn:
    # Please fill in standard JSON string in emoji_maps (You can use 'JSON.stringify' to generate it, and the string must can be parsed by JSON.parse in modern browsers)
    emoji_maps:
    # Please use commas to separate keys in 'meta' and 'required_fields'
    meta:
    required_fields:
    visitor:
    highlight:
    avatar_force:
    record_ip:
    enable_qq:
  # Waline configuration refers to links below
  # https://waline.js.org/reference/client.html#init
  # https://waline.js.org/reference/component.html
  waline: 
    server_url: 
    lang: 
    dark: 
    # Please use commas to separate keys in 'meta' , 'required_meta' and 'emoji'
    meta:
    required_meta:
    emoji:
    login:
    word_limit:
    page_size:
    image_uploader:
    highlighter:
    text_renderer:
    copyright:

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