import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-sketchapp';
import theme from '../../theme';

import {
  defaultStyle,
  defaultItemStyle,
  headerStyle,
  footerStyle,
} from './styleSheets';

const prefix = `${theme.prefix}-list`;

const ListText = ({ children }) => <Text name={`${prefix}-text`} style={defaultStyle.text}>{children}</Text>;

const Item = ({ children, action, extra }, { bordered }) => {
  return (
    <View
      name={`${prefix}-item`}
      style={StyleSheet.flatten([
        defaultItemStyle.view,
        bordered ? defaultItemStyle.paddingView : {},
      ])}
    >
      {children}
    </View>
  );
};

Item.contextTypes = {
  bordered: PropTypes.bool,
};

class List extends React.Component {
  getChildContext() {
    return { bordered: this.props.bordered };
  }
  render() {
    const {
      bordered,
      split,
      children,
      itemLayout,
      loadMore,
      pagination,
      prefixCls,
      grid,
      dataSource,
      size,
      rowKey,
      renderItem,
      header,
      footer,
      loading,
    } = this.props;

    const content = dataSource.map(item => renderItem(item));

    return (
      <View
        name={`${prefix}`}
        style={StyleSheet.flatten([
          defaultStyle.view,
          bordered ? defaultStyle.borderedStyle : {},
        ])}
      >
        {
          header && (
            <View
              name={`${prefix}-header`}
              style={StyleSheet.flatten([
                headerStyle.view,
                bordered ? headerStyle.paddingView : {},
              ])}
            >
              {header}
            </View>
          )
        }
        {content}
        {children}
        {
          footer && (
            <View
              name={`${prefix}-footer`}
              style={StyleSheet.flatten([
                footerStyle.view,
                bordered ? footerStyle.paddingView : {},
              ])}
            >
              {footer}
            </View>
          )
        }
      </View>
    );
  }
}

List.childContextTypes = {
  bordered: PropTypes.bool,
};

List.Text = ListText;
List.Item = Item;

export default List;
