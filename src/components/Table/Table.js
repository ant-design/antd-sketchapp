/* @flow */
import deepmerge from 'deepmerge';
import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp-compatible';
import Thead from './Thead';
import Tbody from './Tbody';
import Expansion from './Expansion';
import Checkbox from '../Checkbox';

import {
  normalStyle,
  borderedStyle,
  middleSizeStyle,
  smallSizeStyle,
  BORDER_RADIUS,
} from './styleSheets';

const fixedStyle = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 62,
  justifyContent: 'center',
  alignItems: 'center',
};

const Table = (props) => {
  let { columns, dataSource } = props; // 日常项
  const { size, bordered, footer, title, expandable, checkable, CheckableJSX } = props; // 配置项

  // 类型 -- 可扩展
  columns = checkable
    ? [].concat(
      {
        title: CheckableJSX ? <CheckableJSX /> : <Checkbox />,
        dataIndex: 'checkbox',
        key: 'checkbox',
        style: fixedStyle,
      },
      columns
    )
    : columns;

  dataSource = checkable
    ? dataSource.map(item =>
      deepmerge(
        {
          checkbox: {
            content: CheckableJSX ? <CheckableJSX /> : <Checkbox />,
            style: fixedStyle,
          },
        },
        item
      )
    )
    : dataSource;

  // 类型 -- 可扩展
  columns = expandable
    ? [].concat(
      {
        title: '',
        dataIndex: 'exp',
        key: 'exp',
        style: fixedStyle,
      },
      columns
    )
    : columns;

  dataSource = expandable
    ? dataSource.map(item =>
      deepmerge(
        {
          exp: {
            content: <Expansion style={StyleSheet.flatten(normalStyle.expansion)} />,
            style: fixedStyle,
          },
        },
        item
      )
    )
    : dataSource;

  const _props = Object.assign({}, props);
  _props.columns = columns;
  _props.dataSource = dataSource;

  const titleJSX = (
    <View
      name="ant-table-title"
      style={StyleSheet.flatten([
        normalStyle.title,
        bordered ? borderedStyle.title : {},
        size === 'middle' ? middleSizeStyle.title : {}, // 中等大小
        size === 'small' ? smallSizeStyle.title : {}, // 中等大小
      ])}
    >
      <Text style={StyleSheet.flatten([normalStyle.titleText])}>我是 title</Text>
    </View>
  );

  /* eslint-disable */
  const hasFooter = footer != '0';
  /* eslint-enable */

  return (
    <View name="ant-table-wrap">
      <View
        name="ant-table"
        style={StyleSheet.flatten([
          normalStyle.table,
          size === 'small' ? smallSizeStyle.table : {},
          bordered ? borderedStyle.table : {},
          bordered || size === 'small'
            ? {
                borderTopLeftRadius: columns && columns.length ? BORDER_RADIUS : 0,
                borderTopRightRadius: columns && columns.length ? BORDER_RADIUS : 0,
                borderBottomLeftRadius: BORDER_RADIUS,
                borderBottomRightRadius: BORDER_RADIUS,
              }
            : {},
        ])}
      >
        {title && titleJSX}

        <Thead {..._props} />
        <Tbody {..._props} hasFooter={hasFooter} />

        {(() => {
          if (hasFooter) {
            return (
              <View
                name="ant-table-footer"
                style={StyleSheet.flatten([
                  normalStyle.footer,
                  size === 'middle' ? middleSizeStyle.footer : {}, // 中等大小
                  size === 'small' ? smallSizeStyle.footer : {}, // 中等大小
                ])}
              >
                <Text style={StyleSheet.flatten([normalStyle.footerText])}>我是 footer</Text>
              </View>
            );
          }
        })()}
      </View>
    </View>
  );
};

export default Table;
