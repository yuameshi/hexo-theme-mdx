> [!WARNING]
>
> This project is under development and might meet some bugs. Please use it with caution.
>
> If you find any bugs, please open an [issue](https://github.com/Yuameshi/hexo-theme-mdx/issues).

> [!NOTE]
> You are reading English documentation.
>
> [打开中文文档](./README.zh.md)

# hexo-theme-mdx

A hexo theme with material design.

# Preview(Links submitting are welcomed)

[Yuameshiの窝](https://www.yuameshi.top/)

[AyaneYeの随手记](https://blog.ayaneye.top/)

# Browser compatibility

| Browser              | Compatibility      |
| -------------------- | ------------------ |
| Chrome               | ✔ Last 5 versions  |
| Firefox              | ✔ Last 5 versions  |
| Edge Chromium        | ✔ Last 5 versions  |
| Edge EdgeHTML        | ❔ Unknown         |
| Safari               | ✔ Last 5 versions  |
| Internet Explorer 11 | ❌ Basic Supported |

### Note: All MDx releases(including alpha/beta versions) after June 15, 2022 will no longer support Internet Explorer due to the upcoming end of support for Internet Explorer on June 15, 2022.

> To get further information, please refer to [this](https://blogs.windows.com/windowsexperience/2022/06/15/internet-explorer-11-has-retired-and-is-officially-out-of-support-what-you-need-to-know/) site.

# Getting Started

## Step 1: Install MDx

```bash
# use npm(recommended) or yarn
$ npm install hexo-theme-mdx --save
# or use git clone or git submodule (not recommended)
# You can remove '-b' to get the latest development version(Unstable)
# To get the full commit history of the repository, remove '--depth 1'
$ git clone https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx -b <Version(Stable Only)> --depth 1
# If you executed the previous command, then this command does not need to be executed
$ git submodule add https://github.com/Yuameshi/hexo-theme-mdx.git themes/mdx
```

## Step 2: Enable MDx

Modify `_config.yml` to change the theme to MDx

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

or copy contents [here](_config.yml) to `_config.mdx.yml`

> [!WARNING]
> If you installed the theme via git and using top level configuration file, please make sure to delete `_config.yml` in the theme directory.

## Step2: Edit configuration file to your needs

For detailed configuration, please refer to the comments in the [configuration file](_config.yml).

# Special features

## Tags

### Folded content

Usage: {% mdx_fold Title isOpen %} Something {% endmdx_fold %}

Example:

```markdown
Here are some folded content

{% mdx_fold "A folded content which is opened by default" true %}
Something are folded. Something are folded. Something are folded. Something are folded.
{% endmdx_fold %}

{% mdx_fold "A folded content which is closed by default" false %}
Something are folded. Something are folded. Something are folded. Something are folded.
{% endmdx_fold %}
```

### GitHub Info Card

Usage: {% mdx_github_info_card repoOwner repoName %}

Example

```markdown
I'll introduce you guys a github repo:

{% mdx_github_info_card Yuameshi hexo-theme-mdx %}
```

### Warn

Usage: {% mdx_warn Title %} Something {% endmdx_warn %}

Example

```markdown
Here are some warning messages

{% mdx_warn "This is the title of the warning message" %}
Here is a warning message. Here is a warning message. Here is a warning message. Here is a warning message.
{% endmdx_warn %}
```
