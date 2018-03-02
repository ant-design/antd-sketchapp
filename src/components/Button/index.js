import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp-compatible';

import Icon from '../Icon';

import {
  defaultStyle,
  primaryStyle,
  dangerStyle,
  dashedStyle,
  // circleStyle,
  smallSizeStyle,
  largeSizeStyle,
  disabledStyle,
  ghostDefaultStyle,
  ghostPrimaryStyle,
  ghostDashedStyle,
  ghostDangerStyle,
} from './styleSheets';

const Button = (props) => {
  const { type, shape: isCircle, ghost, icon, iconName, disabled, text, size } = props;

  let _iconName = 'search';

  if (icon && iconName) {
    _iconName = iconName.toLowerCase().replace(/-/g, '');
  }

  const textStyle = StyleSheet.flatten([
    defaultStyle.text,
    type === 'primary' ? primaryStyle.text : {},
    type === 'danger' ? dangerStyle.text : {},
    type === 'dashed' ? dashedStyle.text : {},
    ghost && type === 'default' ? ghostDefaultStyle.text : {},
    ghost && type === 'primary' ? ghostPrimaryStyle.text : {},
    ghost && type === 'danger' ? ghostDangerStyle.text : {},
    ghost && type === 'dashed' ? ghostDashedStyle.text : {},
    size === 'small' ? smallSizeStyle.text : {},
    size === 'large' ? largeSizeStyle.text : {},
    // isCircle ? circleStyle.text : {},
    disabled ? disabledStyle.text : {},
  ]);

  const textLayer = (
    <Text name={text} style={textStyle}>
      {text}
    </Text>
  );

  const iconLayer = (
    <View
      style={{
        paddingRight: 8,
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 16,
      }}
    >
      <Icon
        type={_iconName}
        style={{
          color: textStyle.color,
          height: size === 'large' ? 16 : 14,
          width: size === 'large' ? 16 : 14,
        }}
      />
    </View>
  );

  return (
    <View
      name="ant-btn"
      style={StyleSheet.flatten([
        defaultStyle.button,
        type === 'primary' ? primaryStyle.button : {},
        type === 'danger' ? dangerStyle.button : {},
        type === 'dashed' ? dashedStyle.button : {},
        ghost && type === 'default' ? ghostDefaultStyle.button : {},
        ghost && type === 'primary' ? ghostPrimaryStyle.button : {},
        ghost && type === 'danger' ? ghostDangerStyle.button : {},
        ghost && type === 'dashed' ? ghostDashedStyle.button : {},
        size === 'small' ? smallSizeStyle.button : {},
        size === 'large' ? largeSizeStyle.button : {},
        // isCircle ? circleStyle.button : {},
        disabled ? disabledStyle.button : {},
      ])}
    >
      {icon ? iconLayer : null}
      {!isCircle ? textLayer : ' '}
    </View>
  );
};

export default Button;
