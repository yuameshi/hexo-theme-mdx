你正在阅读中文文档。

[Take me to the English documentation.](./README.md)

# hexo-theme-mdx
一个具有Material Design设计的Hexo主题

# 预览(欢迎提交链接)

[Yuameshiの窝](https://www.yuameshi.top/)

[AyaneYeの随手记](https://drbstore.yuameshi.top/)

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
您可以使用Hexo命令修改主题为为
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
  enable: true
  text: 此网站使用Cookie来改善您的体验。

header_picture_link: # 头图链接
favicon: # 网站图标链接
excerpt_length: 250 # 自动生成的摘要长度，<!-- more -->也支持

# 搜索设置(依赖 "hexo-generator-search")
# 需配置为JSON格式，路径为'/search.json'
# 目前这个设置项没什么用
search:
  path: /search.json

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

footer:
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