import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-sketchapp';

import { row } from './styleSheets';

class Row extends React.Component {
  static defaultProps = {
    gutter: 0,
  };
  getChildContext() {
    return { gutter: this.props.gutter };
  }
  render() {
    const {
      gutter,
      align = 'flex-start',
      justify = 'flex-start',
      children,
      style,
      ...rest
    } = this.props;
    return (
      <View
        name="ant-row"
        style={StyleSheet.flatten([
          {
            marginLeft: gutter && -(gutter / 2),
            marginRight: gutter && -(gutter / 2),
            justifyContent: justify,
            alignItems: align,
            ...row,
          },
          style,
        ])}
        {...rest}
      >
        {children}
      </View>
    );
  }
}

Row.childContextTypes = {
  gutter: PropTypes.number,
};

export default Row;
