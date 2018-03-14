
## 开发指引

在这之前，请确保看过 [从 0 开始](getting-start.md)。

### 如何预览效果

1. 运行 `clone git@github.com:ant-design/antd-sketchapp.git`
2. 运行 `npm i`
3. 运行 `npm run watch` 以监听文件变更并实时编译
3. 运行 `npm run link` 将编译后的插件包软链接到指定插件目录下
4. 现在你可以看到 `/plugin.sketchplugin`
5. 打开 Sketch.app，查看菜单栏 - 插件 中的 'antd-sketchapp'
6. 玩得愉快 😁

**Demo 插件源码路径：** 

- manifest: `/src/manifest.json`
- entry: `/src/demo.js`

其展示了如何在 Sketch 插件中使用 `antd-sketchapp` 完成功能。
### 插件开发辅助

- [SKPM](https://github.com/skpm)：Sketch Plugin Manager
- [Sketch Devtools](https://github.com/skpm/sketch-dev-tools): See your plugin logs, inspect the state of Sketch documents, explore actions, and more
