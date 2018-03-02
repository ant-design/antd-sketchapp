import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp-compatible';
import {
  normalStyle,
  borderedStyle,
  middleSizeStyle,
  smallSizeStyle,
  BORDER_RADIUS,
} from './styleSheets';

export default (props) => {
  const { columns, item, type, noBottomBorder, bordered, size, title: hasTitle } = props;
  const tds = [];

  if (type === 'body') {
    Object.keys(item).forEach((key, i) => {
      const cellStyle = {};
      const cellTextStyle = {};
      const columnItemStyle = columns && columns[i] && columns[i].style;

      if (columnItemStyle) {
        Object.keys(columnItemStyle).forEach((_key) => {
          if (!columnItemStyle[_key]) return false;

          if (_key === 'flex') {
            cellStyle.flex = columnItemStyle[_key];
          } else {
            cellTextStyle[_key] = columnItemStyle[_key];
          }
        });
      }

      const _style = Object.assign(
        {},
        StyleSheet.resolve(normalStyle.td).style,
        size === 'middle' ? StyleSheet.resolve(middleSizeStyle.td).style : {}, // 中等大小
        size === 'small' ? StyleSheet.resolve(smallSizeStyle.td).style : {}, // 小号
        bordered ? StyleSheet.resolve(borderedStyle.td).style : {}, // 有边框样式
        cellStyle,
        item[key].style
      );

      if (noBottomBorder) {
        // 有footer时最后一行 tr 不显示底边框
        _style.borderBottomWidth = 0;
      }

      if (i === Object.keys(item).length - 1) {
        // 有边框时每行最后一个 td 不显示右边框
        _style.borderRightWidth = 0;
      }

      if (i === Object.keys(item).length - 1 && noBottomBorder) {
        _style.borderBottomRightRadius = BORDER_RADIUS;
      }

      if (i === 0 && noBottomBorder) {
        _style.borderBottomLeftRadius = BORDER_RADIUS;
      }

      let innerContent;
      if (typeof item[key].content === 'string' || typeof item[key].content === 'number') {
        innerContent = (
          <Text name={key} style={StyleSheet.flatten([normalStyle.tdText, cellTextStyle])}>
            {String(item[key].content)}
          </Text>
        );
      } else {
        innerContent = (
          <View name={key} style={StyleSheet.flatten([normalStyle.tdText, cellTextStyle])}>
            {item[key].content}
          </View>
        );
      }

      tds.push(
        <View key={key} name="td" style={_style}>
          {innerContent}
        </View>
      );
    });
  } else if (type === 'head' && columns && columns.length) {
    columns.forEach((_item, i) => {
      const extendStyle = {};
      if (i === 0 && (!bordered || !hasTitle)) {
        // 左上圆角
        extendStyle.borderTopLeftRadius = BORDER_RADIUS;
      } else if (i === columns.length - 1 && (!bordered || !hasTitle)) {
        // 右上圆角
        extendStyle.borderTopRightRadius = BORDER_RADIUS;
      }

      if (i === columns.length - 1) {
        // 有边框时每行最后一个 th 不显示右边框
        extendStyle.borderRightWidth = 0;
      }

      let innerContent;

      if (typeof _item.title === 'string' || typeof _item.title === 'number') {
        innerContent = (
          <Text
            name={_item.key || _item.title}
            style={StyleSheet.flatten([
              normalStyle.tdText,
              normalStyle.thText,
              { textAlign: _item.style.textAlign },
            ])} // 只选取文字居中的样式
          >
            {String(_item.title)}
          </Text>
        );
      } else {
        innerContent = (
          <View
            name={_item.key || _item.title}
            style={StyleSheet.flatten([
              normalStyle.tdText,
              normalStyle.thText,
              { textAlign: _item.style.textAlign },
            ])} // 只选取文字居中的样式
          >
            {_item.title}
          </View>
        );
      }

      tds.push(
        <View
          key={_item.key}
          name="th"
          style={Object.assign(
            {},
            StyleSheet.resolve(normalStyle.td).style,
            StyleSheet.resolve(normalStyle.th).style,
            bordered ? StyleSheet.resolve(borderedStyle.td).style : {}, // 有边框样式
            size === 'middle' ? StyleSheet.resolve(middleSizeStyle.td).style : {}, // 中等大小
            size === 'small' ? StyleSheet.resolve(smallSizeStyle.td).style : {}, // 小号
            size === 'small' ? StyleSheet.resolve(smallSizeStyle.th).style : {}, // 小号
            _item && _item.style,
            extendStyle
          )}
        >
          {innerContent}
        </View>
      );
    });
  }

  return (
    <View
      name="ant-table-row"
      style={StyleSheet.flatten([
        normalStyle.tr,
        size === 'small' ? smallSizeStyle.tr : {},
        bordered ? borderedStyle.tr : {},
      ])}
    >
      {tds}
    </View>
  );
};
