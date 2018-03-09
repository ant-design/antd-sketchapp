## Theme Config

In order to separate the design and implementation, we separated the styles according to the Ant Design, making it easy to switch themes or modify the themes.

![color](https://gw.alipayobjects.com/zos/rmsportal/VjjIZrBkHIKHJmWJcjpi.png)

From the above figure, we can see that we have a total of three layers. The bottom is the global color palette configuration of design system, the second is the theme configuration, and the top layer is the component style configuration.

The overall style reference is designed according to Ant Design. The reference file is: `src/theme/default.less`.

In code the styles is defined using the `StyleSheet` of React Sketch.app, ant the `StyleSheet.flatten` function is using to merge styles.

More: [React Sketch.app StyleSheet](http://airbnb.io/react-sketchapp/docs/API.html#stylesheet)。
