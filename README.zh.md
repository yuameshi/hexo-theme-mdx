# 警告: 🚧 项目施工中 🚧

还没做好，小心点用，出Bug及时反馈

你正在阅读中文文档。

[Take me to the English documentation.](./README.md)

# hexo-theme-mdx
一个具有Material Design设计的Hexo主题

# 预览(欢迎提交链接)

[Yuameshiの窝](https://www.yuameshi.top/)

[AyaneYeの随手记](https://drbstore.yuameshi.top/)

[Galaxy City](https://blog.restent.win/)

[Neko3327's Blog](https://neko3327.restent.win)

# 浏览器兼容性
| 浏览器                  | 兼容性      |
|----------------------|----------|
| Chrome               | ✔ 最近5个版本 |
| Firefox              | ✔ 最近5个版本 |
| Edge Chromium        | ✔ 最近5个版本 |
| Edge EdgeHTML        | ？未知      |
| Safari               | ✔ 最近5个版本 |
| Internet Explorer 11 | 部分支持     |
| Internet Explorer 10 | 基本支持     |

### 注意：由于Internet Explorer即将在2022年6月15日停止支持，所以在2022年6月15日之后所有的MDx版本（包括alpha和beta版本）将不再支持Internet Explorer。

# 开始使用
## 1.安装MDx
```bash
# 使用 npm 或 yarn 安装(推荐)
$ npm install hexo-theme-mdx --save
# 或者使用git clone或git submodule (不推荐)
# 您可以去掉'-b'来获取最新的开发版本(不稳定)
# 如需获取仓库的完整提交历史，请去掉'--depth 1'
$ git clone https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx -b <版本号> --depth 1
# 若您执行了上一条命令，则此条命令无需执行
$ git submodule add https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx
```
## 2.启用主题
您可以使用Hexo命令修改主题为
```bash
hexo config theme mdx
```
也可以直接修改`_config.yml`
```diff yaml
- theme: previous theme
+ theme: mdx
```

# 配置主题

## 1.下载配置文件

```bash
# Bash
$ wget https://cdn.jsdelivr.net/gh/Yuameshi/hexo-theme-mdx@main/_config.yml -O _config.mdx.yml
```
```powershell
# PowerShell
(New-Object System.Net.WebClient).DownloadFile("wget https://cdn.jsdelivr.net/gh/Yuameshi/hexo-theme-mdx@main/_config.yml", "_config.mdx.yml")
```
或者拷贝下方的内容到`_config.yml`中

注意：如果您是通过 git 安装的主题，那么您应该删除主题目录中的 `_config.yml`。

## 2.根据个人需求编辑配置文件
```yaml
# 主题设置
# 使用CDN加速前端载入(CDN提供商:true(使用默认的jsdelivr)/cdnjs/jsdelivr/staticfile/bootcdn/bytedance/unpkg/false(不使用CDN))
# 注意：对于Waline、Valine和Twikoo评论客户端，使用bytedance CDN将自动转为JSDelivr(此CDN的库版本过旧且不好接入)
cdn_provider: 'cdnjs'

# 使用特定的MDUI库版本(默认1.0.2，您可以手动修改为其他版本)
# 注意：不使用CDN时请将这项留空或者填写1.0.2，否则会出现错误
mdui_version:  

# 主题设置
use_cdn: true # 使用CDN加速前端载入(CDN提供商:cdn.jsdelivr.net)

# 主题颜色
# 颜色列表请看: https://www.mdui.org/docs/color
color:
  primary: indigo
  accent: pink

# GPDR Cookie提示(支持HTML标签)
# 效果是页面右下角显示一个Snackbar
gdpr_cookie_alert:
  enable: true # 是否启用(默认关闭)
  # 如需享受MDx的i18n功能，请将下面留空
  # 提示文字
  text: 此网站使用Cookie来改善您的体验。
  # 按钮文字
  ack_btn: 了解

# 检查用户在线状态
# 如果您用了Service-Worker等技术在无网络时也能阅读文章，但是无法进行评论等操作，那么此选项将非常有用
# 启用后MDx会每隔5秒检测一次网络连接，并在丢失网络连接时显示一条提示。
online_check:
  enable: false # 是否启用(默认关闭)
  # 如需享受MDx的i18n功能，请将下面留空
  # 离线时提示的文字(可选)
  offlineText: 您似乎处于离线状态，某些功能无法使用，请检查您的网络连接。
  # 网络连接恢复时提示的文字(可选)
  onlineText: 网络连接已恢复！
  ack_btn: 了解

# Link to header picture
header_picture_link: # 头图链接
# Link to favicon.ico
favicon: # 网站图标链接
# Auto-generated excerpt length, <!-- more --> is supported
excerpt_length: 250 # 自动生成的摘要长度，<!-- more -->也支持

# 搜索设置(依赖 "hexo-generator-search")
# 需配置为JSON格式，路径为'/search.json'
search:
  # 是否启用搜索功能(默认打开)
  enable: true
  # 搜索数据库路径(默认为'/search.json')
  path: /search.json
  # 如需享受MDx的i18n功能，请将下面留空
  # 搜索框提示文字(可选)
  placeholder: 搜点什么...
  # 无结果时显示的文字($txt$会被替换为搜索的内容)(可选)
  no_result: 没有找到与“$txt$”相关文章
  # 搜索数据库加载错误时显示的文字(可选)
  error: MDx的搜索数据库似乎未正确加载，请尝试刷新页面

# 抽屉菜单的关于栏
drawer_about:
  enable: true
  avatar: # 头像链接
  name: # 名字
  slogan: # 标语（个性签名）
  background: # 背景图片链接
  is_dark: true # 背景图是不是深色的

# 抽屉菜单列表（暂不支持嵌套列表）
# 格式: 名称: 链接 || 图标
# 图标到 https://www.mdui.org/docs/material_icon 找
drawer:
  主页: / || &#xe88a;
  MDx: https://github.com/Yuameshi/hexo-theme-mdx || &#xe243;
  GitHub: https://github.com/Yuameshi || &#xe149;
  关于: /about || &#xe88e;

# 文章末尾插入的文段，%title%表示文章标题，%link%表示文章链接
passage_end_tag:
  enabled: true
  text: 'END'

# 评论系统
comment:
  use: 
  # Gitalk配置文档：https://github.com/gitalk/gitalk/
  gitalk:
    clientID: 
    clientSecret: 
    repo: 
    owner: 
    admin: ['']
    distractionFreeMode: true
  # utterances配置文档：https://utteranc.es/
  utterances:
    repo: 
    issue_term: 
    lable: 
    theme: 
  # Valine配置参考 https://valine.js.org/configuration.html
  valine:
    app_id:
    app_key:
    placeholder:
    avatar:
    page_size:
    lang:
    server_urls:
    emoji_cdn:
    # emoji_maps请填入JSON字符串（可以使用JSON.stringify来生成，要能在现代浏览器内正常用JSON.parse解析)
    emoji_maps:
    # 请使用逗号分割meta和required_fields中的字符串
    meta:
    required_fields:
    visitor:
    highlight:
    avatar_force:
    record_ip:
    enable_qq:
  # Waline配置参考以下链接
  # https://waline.js.org/reference/client.html#init
  # https://waline.js.org/reference/component.html
  waline: 
    server_url: 
    lang: 
    dark: 
    # 请使用逗号分割meta、required_meta和emoji中的字符串
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
  # Twikoo 配置参考以下链接
  # https://twikoo.js.org/quick-start.html
  # https://twikoo.js.org/quick-start.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5
  twikoo:
    envId:
    region:
    lang:

# 网页分析
analytics:
  # Google Analytics官网：https://analytics.google.com/
  google:
    enabled: false
    tracking_id: 
  # Cloudflare Web Analytics文档：https://developers.cloudflare.com/analytics/web-analytics
  cloudflare:
    enabled: false
    token: 

advertisement:
  google:
    # Gooele AdSense refers to https://www.google.com/adsense
    client_ca_pub:

footer:
  style: 'modern' # 三种选择：现代(modern)、简洁(simple)、传统(traditional)
  # 在传统和简洁模式下不会显示全部，您仅能从以下几个选一个显示：版权(copyrights)、同时显示两个备案号(icp)、仅显示工信部备案(miit_icp)、仅显示萌备(moe_icp)、展示网站由Hexo驱动(powered_by)
  # 注意：选择'powered_by'会遵循您对'hexo'和'theme'的设置
  # 注意：仅在您选择简洁和传统主题时需要设置这一项
  show: 'powered_by'
  since: # 站点开始运营时间
  copyrights: true # 会在页脚显示 '© %SITE_NAME%'
  hexo: true # 会在页脚显示 'Powered by Hexo'
  theme: true # 会在页脚显示 '由 MDx 主题装饰'（球球了开开吧）
  text: # 会在页脚显示 '自定义的文字'
  contact: # 会在页脚显示链接
    MDx: https://github.com/Yuameshi/hexo-theme-mdx
    GitHub: https://github.com/Yuameshi
  miit_icp: # 会在页脚显示备案号
  moe_icp: # 会在页脚显示萌备
```

# 主题特有功能

## 特有标签

### 折叠内容
用法: {% mdx_fold Title isOpen %} Something {% endmdx_fold %}

示例

```markdown
以下是折叠内容

{% mdx_fold 这是一个默认打开的折叠内容的标题 true %}
这是折叠内容这是折叠内容这是折叠内容
{% endmdx_fold %}
{% mdx_fold 这是一个默认关闭的折叠内容的标题 false %}
这是折叠内容这是折叠内容这是折叠内容
{% endmdx_fold %}
```
### GitHub信息卡
用法: {% mdx_github_info_card repoOwner repoName %}

示例

```markdown
下面来介绍一个GitHub仓库：

{% mdx_github_info_card Yuameshi hexo-theme-mdx %}
```
### 警告内容
用法: {% mdx_warn Title %} Something {% endmdx_warn %}

示例

```markdown
以下是警告内容

{% mdx_warn 这是一个警告内容的标题 %}
这里是一段警告这里是一段警告这里是一段警告这里是一段警告这里是一段警告
{% endmdx_warn %}
```
