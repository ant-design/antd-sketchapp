> This project is currently in beta and APIs are subject to change.

<p align="center">
  <a href="http://ant.design">
    <img height="200" src="https://gw.alipayobjects.com/zos/rmsportal/NNLMXfSoatfMpmTEmNsG.svg">
  </a>
</p>

# antd-sketchapp

[![](https://img.shields.io/travis/ant-design/antd-sketchapp.svg?style=flat-square)](https://travis-ci.org/ant-design/antd-sketchapp)
[![Codecov](https://img.shields.io/codecov/c/github/ant-design/antd-sketchapp/master.svg?style=flat-square)](https://codecov.io/gh/ant-design/antd-sketchapp/branch/master)

[![npm package](https://img.shields.io/npm/v/antd-sketchapp.svg?style=flat-square)](https://www.npmjs.org/package/antd-sketchapp)
[![NPM downloads](http://img.shields.io/npm/dm/antd-sketchapp.svg?style=flat-square)](https://npmjs.org/package/antd-sketchapp)
[![Join the chat at https://gitter.im/ant-design/antd-sketchapp](https://img.shields.io/gitter/room/ant-design/antd-sketchapp.svg?style=flat-square)](https://gitter.im/ant-design/antd-sketchapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What is it?

[react-sketchapp](https://github.com/airbnb/react-sketchapp) is an awesome solution which can render React components to Sketch, and antd-sketchapp is an React-sketchapp-based implementation of [ant-design](https://github.com/ant-design/ant-design).

![Demo](https://user-images.githubusercontent.com/2953176/36887382-e9205fa4-1e2b-11e8-937b-295d306dce5b.gif)

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
$ npm run link
```

then open your Sketch and you can find commands in Plugins on Sketch toolbar. [more](docs/development.md)

## Component completion list

#### General

- [x] Button 按钮
- [x] Icon 图标

#### Layout

- [x] Grid 栅格
- [ ] ~~Layout 布局~~

#### Navigation

- [ ] ~~Affix 固钉~~
- [ ] Breadcrumb 面包屑
- [ ] Dropdown 下拉菜单
- [ ] Menu 导航菜单
- [x] Pagination 分页
- [ ] Steps 步骤条

#### Data Entry

- [ ] AutoComplete 自动完成
- [ ] Cascader 级联选择
- [x] Checkbox 多选框
- [ ] DatePicker 日期选择框
- [ ] Form 表单
- [ ] InputNumber 数字输入框
- [ ] Input 输入框
- [ ] Mention 提及
- [ ] Rate 评分
- [ ] Radio 单选框
- [ ] Select 选择器
- [ ] Slider 滑动输入条
- [ ] Switch 开关
- [ ] TreeSelect 树选择
- [ ] TimePicker 时间选择框
- [ ] Transfer 穿梭框
- [ ] Upload 上传

#### Data Display

- [ ] Avatar 头像
- [ ] Badge 徽标数
- [ ] Calendar 日历
- [ ] Card 卡片
- [ ] Carousel 走马灯
- [ ] Collapse 折叠面板
- [ ] List 列表
- [ ] Popover 气泡卡片
- [ ] Tooltip 文字提示
- [x] Table 表格
- [ ] Tabs 标签页
- [ ] Tag 标签
- [ ] Timeline 时间轴
- [ ] Tree 树形控件

#### Feedback

- [ ] Alert 警告提示
- [ ] Modal 对话框
- [ ] Message 全局提示
- [ ] Notification 通知提醒框
- [ ] Progress 进度条
- [ ] Popconfirm 气泡确认框
- [ ] Spin 加载中

## Contributing

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/ant-design/antd-sketchapp/pulls) or as [GitHub issues](https://github.com/ant-design/antd-sketchapp/issues). If you'd like to improve code, check out the [Development Instructions](https://github.com/ant-design/antd-sketchapp/wiki/Development) and have a good time! :)
