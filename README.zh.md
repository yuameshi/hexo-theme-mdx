> [!WARNING]
>
> 可能有Bug，小心点用，出Bug烦请及时提出[Issue](https://github.com/Yuameshi/hexo-theme-mdx/issues)反馈

> [!NOTE]
> 你正在阅读中文文档。
>
> [Take me to the English documentation.](./README.md)

# hexo-theme-mdx

一个具有Material Design设计的Hexo主题

# 预览(欢迎提交链接)

[Yuameshiの窝](https://www.yuameshi.top/)

[AyaneYeの随手记](https://blog.ayaneye.top/)

# 浏览器兼容性

| 浏览器               | 兼容性        |
| -------------------- | ------------- |
| Chrome               | ✔ 最近5个版本 |
| Firefox              | ✔ 最近5个版本 |
| Edge Chromium        | ✔ 最近5个版本 |
| Edge EdgeHTML        | ❔ 未知       |
| Safari               | ✔ 最近5个版本 |
| Internet Explorer 11 | ❌ 基础支持   |

### 注意：由于Internet Explorer即将在2022年6月15日停止支持，所以在2022年6月15日之后所有的MDx版本（包括alpha和beta版本）将不再支持Internet Explorer。

> 要获得更多信息，请参见[此页面](https://blogs.windows.com/windowsexperience/2022/06/15/internet-explorer-11-has-retired-and-is-officially-out-of-support-what-you-need-to-know/)。

# 开始使用

## 1.安装MDx

```bash
# 使用 npm 或 yarn 安装(推荐)
$ npm install hexo-theme-mdx --save
# 或者使用git clone或git submodule (不推荐)
# 您可以去掉'-b'来获取最新的开发版本(不稳定)
# 如需获取仓库的完整提交历史，请去掉'--depth 1'
$ git clone https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx -b <版本号(仅限稳定版)> --depth 1
# 若您执行了上一条命令，则此条命令无需执行
$ git submodule add https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx
```

## 2.启用主题

您可以修改 `_config.yml` 以启用MDx主题

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

或者拷贝[这里](_config.yml)的内容到`_config.mdx.yml`中

> [!WARNING]
> 如果您是通过 git 安装的主题并希望将配置文件置于目录顶层，那么您应该删除主题目录中的 `_config.yml`。

## 2.根据个人需求编辑配置文件

详细的配置请参阅[配置文件](_config.yml)中的注释。

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
