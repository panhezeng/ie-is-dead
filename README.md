通过 window.ieIsDead = { delay:0 } 可以设置关闭弹窗后多少分钟再弹窗，默认每次打开或刷新页面都弹窗

通过 window.ieIsDead = { version:10 } 可以设置从哪个 IE 版本及以下开始弹窗，默认是 10（即 IE10 及以下都提示升级）

通过 window.ieIsDead = { recommendBrowsers:[] } 可以设置推荐浏览器

默认使用示例

```html
<script>
  /*@cc_on 
document.write('\x3Cscript src="https://cdn.jsdelivr.net/npm/@panhezeng/ie-is-dead@latest/dist/ie-is-dead.min.js">\x3C/script>');
@*/
</script>
```

传参数使用示例

```html
<script>
  /*@cc_on
window.ieIsDead = {
    recommendBrowsers: [
        {
            slug: "chrome",
            name: "谷歌浏览器",
            url: "https://www.google.cn/chrome/"
        },
        {
            slug: "firefox",
            name: "火狐浏览器",
            url: "https://www.mozilla.org/zh-CN/firefox/"
        },
        {
            slug: "edge",
            name: "微软浏览器",
            url: "https://www.microsoft.com/zh-cn/windows/microsoft-edge/"
        }
    ]
};
document.write('\x3Cscript src="https://cdn.jsdelivr.net/npm/@panhezeng/ie-is-dead@latest/dist/ie-is-dead.min.js">\x3C/script>');
@*/
</script>
```

## 编译

```bash
# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/
```
