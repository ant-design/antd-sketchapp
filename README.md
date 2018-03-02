> This project is currently in beta and APIs are subject to change.

<p align="center">
  <a href="http://ant.design">
    <img height="200" src="https://gw.alipayobjects.com/zos/rmsportal/NNLMXfSoatfMpmTEmNsG.svg">
  </a>
</p>

# Ant Design for React Sketch.app

[![](https://img.shields.io/travis/ant-design/antd-sketchapp.svg?style=flat-square)](https://travis-ci.org/ant-design/antd-sketchapp)
[![Codecov](https://img.shields.io/codecov/c/github/ant-design/antd-sketchapp/master.svg?style=flat-square)](https://codecov.io/gh/ant-design/antd-sketchapp/branch/master)

[![npm package](https://img.shields.io/npm/v/antd-sketchapp.svg?style=flat-square)](https://www.npmjs.org/package/antd-sketchapp)
[![NPM downloads](http://img.shields.io/npm/dm/antd-sketchapp.svg?style=flat-square)](https://npmjs.org/package/antd-sketchapp)
[![Join the chat at https://gitter.im/ant-design/antd-sketchapp](https://img.shields.io/gitter/room/ant-design/antd-sketchapp.svg?style=flat-square)](https://gitter.im/ant-design/antd-sketchapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What is it?

[React Sketch.app](https://github.com/airbnb/react-sketchapp) is a awesome solution whitch can use React in Sketch, and antd-sketchapp is a Ant Design UI library for React Sketch.app.

![table](https://gw.alipayobjects.com/zos/rmsportal/aCthUVWUTQEmhdzamVLB.png)

## Install

```bash
npm install antd-sketchapp --save
```

## Usage

```jsx
import React from 'react';
import { Button } from 'antd-sketchapp';

const Demo = () => (
  <Button type="dashed" text="disabled-dashed-ghost" disabled ghost />
);

export default Demo;
```

## Documentation
- [Getting Start](docs/en-us/getting-start.md)
- [Development](docs/en-us/development.md)

## Development

```bash
$ git clone git@github.com:ant-design/antd-sketchapp.git
$ cd antd-sketchapp
$ npm install
$ npm run watch
```

then open your Sketch and you can find commands in Plugins on Sketch toolbar. [more](docs/development.md)

## Contributing

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/ant-design/antd-sketchapp/pulls) or as [GitHub issues](https://github.com/ant-design/antd-sketchapp/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/ant-design/antd-sketchapp/wiki/Development) and have a good time! :)
