import React from 'react';
import { View, StyleSheet } from 'react-sketchapp-compatible';

import Check from './Check';
import Indeterminate from './Indeterminate';
import {
  defaultStyle,
  disabledStyle,
  checkedStyle,
  focusStyle,
  indeterminateStyle,
  disabledCheckedStyle,
} from './styleSheets';

const Checkbox = (props) => {
  const { checked, disabled, indeterminate, autoFocus, focus } = props;

  const checkColor = StyleSheet.flatten([
    defaultStyle.check,
    indeterminate ? indeterminateStyle.check : {}, // 未全选
    disabled ? disabledStyle.check : {}, // 禁用
    (disabled && (checked || indeterminate)) ? disabledCheckedStyle.check : {},
  ]).color;

  return (
    <View
      name="ant-checkbox"
      style={StyleSheet.flatten([
        defaultStyle.box,
        autoFocus || focus ? focusStyle.box : {}, // 聚焦
        checked ? checkedStyle.box : {}, // 选中
        indeterminate ? indeterminateStyle.box : {}, // 未全选
        disabled ? disabledStyle.box : {}, // 禁用
        (disabled && checked) ? disabledCheckedStyle.box : {},
      ])}
    >
      { indeterminate ? <Indeterminate color={checkColor} /> : <Check color={checkColor} />}
    </View>
  );
};

export default Checkbox;
