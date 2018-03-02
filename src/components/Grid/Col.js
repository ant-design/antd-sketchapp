import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-sketchapp-compatible';

import { col } from './styleSheets';

const Col = (
  { span, offset, order = 0, style = {}, align = 'flex-start', justify = 'flex-start', children },
  { gutter }
) => {
  return (
    <View
      name={`ant-col-${span}`}
      style={StyleSheet.flatten([
        {
          order,
          flexGrow: style.width === 'auto' && 1,
          paddingRight: gutter && gutter / 2,
          paddingLeft: gutter && gutter / 2,
          alignItems: align,
          justifyContent: justify,
          flexBasis: span && `${span / 24 * 100}%`,
          marginLeft: offset && `${offset / 24 * 100}%`,
          ...col,
        },
        style,
      ])}
    >
      {children}
    </View>
  );
};

Col.contextTypes = {
  gutter: PropTypes.number,
};

export default Col;
