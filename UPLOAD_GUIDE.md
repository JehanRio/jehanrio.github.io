# GitHub 上传指导

## 方法一：使用GitHub CLI（推荐）

1. **安装GitHub CLI**（如果没有的话）：
   ```bash
   # 在Linux/macOS上
   curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
   sudo apt update
   sudo apt install gh
   ```

2. **登录GitHub**：
   ```bash
   gh auth login
   ```

3. **推送到仓库**：
   ```bash
   cd /home/pc/workspace/personal-blog
   git push -u origin master
   ```

## 方法二：手动创建仓库并推送

1. **首先访问您的GitHub仓库页面**：
   - https://github.com/JehanRio/jehanrio.github.io
   - 如果仓库不存在，需要先在GitHub上创建

2. **如果仓库是空的，GitHub会提供推送指令**：
   ```bash
   # GitHub会提供类似这样的指令：
   echo "# jehanrio.github.io" >> README.md
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/JehanRio/jehanrio.github.io.git
   git push -u origin main
   ```

3. **对于现有的博客代码，使用这些命令**：
   ```bash
   cd /home/pc/workspace/personal-blog
   # 切换到main分支（现代GitHub默认）
   git branch -M main
   # 推送代码
   git push -u origin main
   ```

## 方法三：使用GitHub Desktop

1. **下载并安装GitHub Desktop**
2. **克隆您的仓库**
3. **将博客文件复制到仓库目录**
4. **提交并推送更改**

## 验证上传

上传完成后，您的博客应该可以通过以下地址访问：
- https://jehanrio.github.io

## 常见问题

**Q: 推送时提示身份验证失败？**
A: 确保您有访问该仓库的权限，或者使用GitHub CLI登录。

**Q: 仓库不存在？**
A: 需要先在GitHub上创建名为`jehanrio.github.io`的仓库。

**Q: 想要使用GitHub Pages？**
A: 推送完成后，在仓库设置中启用GitHub Pages功能，选择master/main分支作为源。

选择一种方法完成上传，然后告诉我结果！