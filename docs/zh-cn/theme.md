## 主题设置

为了分离设计与实现，我们按照 Ant Design 模式分层了样式，让切换主题修改主题变得异常简单。

![color](https://gw.alipayobjects.com/zos/rmsportal/VjjIZrBkHIKHJmWJcjpi.png)

从上图可以看出，我们一共分了三层，最底层是通用的颜色计算，是整个设计体系的色板，然后是统一的通用主题配置，最上层是组件细化的样式配置。

而整体的样式参考是按照 Ant Design 设计来的，相关参考文件在：`src/theme/default.less` 中。

样式的定义使用则是使用了 React Sketch.app 的 `StyleSheet` 对象进行处理，其中 `StyleSheet.flatten` 可以合并多个样式。

更多可以参考：[React Sketch.app StyleSheet](http://airbnb.io/react-sketchapp/docs/API.html#stylesheet)。
