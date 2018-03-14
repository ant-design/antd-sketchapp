
## 开发指引

在这之前，请确保看过 [从 0 开始](getting-start.md)。

### 如何预览效果

当完整的下载了项目并且运行 `npm install` 安装了全部依赖后，你可以命令行运行 `npm run watch` 进入调试模式，打开 Sketch，就能够在顶部 toolbar 的 Plugins 选项中看到此调试插件，可以查看效果。

**Demo 插件源码路径：** 

- manifest: `/src/manifest.json`
- entry: `/src/demo.js`

其展示了如何在 Sketch 插件中使用 `antd-sketchapp` 完成功能。
### 插件开发辅助

- [SKPM](https://github.com/skpm)：Sketch Plugin Manager
- [Sketch Devtools](https://github.com/skpm/sketch-dev-tools): See your plugin logs, inspect the state of Sketch documents, explore actions, and more
