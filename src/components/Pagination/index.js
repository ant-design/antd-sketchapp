import React from 'react';
import { Text, View, StyleSheet } from 'react-sketchapp';
import Icon from '../Icon';
import theme from '../../theme';

import {
  paginationStyle,
  defaultItemStyle,
  itemIconStyle,
  activeItemStyle,
  disabledItemStyle,
  defaultEllipsisStyle,
  ellipsisIconStyle,
  smallItemStyle,
} from './styleSheets';

const prefix = `${theme.prefix}-pagination`;

const ItemIcon = ({ type, disabled }) => (
  <Icon
    type={type}
    style={StyleSheet.flatten([itemIconStyle.default, disabled ? itemIconStyle.disabled : {}])}
  />
);

const Item = ({ page, active, disabled, size = 'default', icon }) => (
  <View
    name={`${prefix}-item`}
    style={StyleSheet.flatten([
      defaultItemStyle.view,
      size === 'small' ? smallItemStyle.view : {},
      active ? activeItemStyle.view : {},
      disabled ? disabledItemStyle : {},
    ])}
  >
    {icon && <ItemIcon type={icon} disabled={disabled} />}
    {!icon && (
      <Text
        name={`${prefix}-item-text`}
        style={StyleSheet.flatten([
          defaultItemStyle.text,
          size === 'small' ? smallItemStyle.text : {},
          active ? activeItemStyle.text : {},
          disabled ? disabledItemStyle.text : {},
        ])}
      >
        {page}
      </Text>
    )}
  </View>
);

const Ellipsis = ({ size }) => (
  <View
    name={`${prefix}-item-ellipsis`}
    style={StyleSheet.flatten([
      defaultItemStyle.view,
      size === 'small' ? smallItemStyle.view : {},
      defaultEllipsisStyle.view,
    ])}
  >
    <Icon type="ellipsis" style={ellipsisIconStyle.default} />
  </View>
);

const Pagination = ({ current = 1, total = 10, pageSize = 10, size = 'default' }) => {
  /* eslint no-param-reassign: 0 */
  current = parseInt(current, 10);
  total = parseInt(total, 10);
  pageSize = parseInt(pageSize, 10);

  const pages = Math.ceil(total / pageSize);
  const pagesArray = Array(pages).fill(' ');

  const totalPage = Math.ceil(total / pageSize);

  const frontView = (
    <View name={`${prefix}`} style={paginationStyle.view}>
      <Item icon="left" size={size} disabled={current === 1} />
      {Array(5)
        .fill(' ')
        .map((e, i) => {
          const page = i + 1;
          if (current === page) {
            return <Item size={size} key={page} page={`${page}`} active />;
          } else {
            return <Item size={size} key={page} page={`${page}`} />;
          }
        })}
      <Ellipsis size={size} />
      <Item size={size} page={`${totalPage}`} />
      <Item icon="right" size={size} disabled={current === totalPage} />
    </View>
  );

  const behindView = (
    <View name={`${prefix}`} style={paginationStyle.view}>
      <Item icon="left" size={size} disabled={current === 1} />
      <Item size={size} page="1" />
      <Ellipsis size={size} />
      {Array(4)
        .fill(' ')
        .map((e, i) => {
          const page = i + totalPage - 4;
          if (current === page) {
            return <Item size={size} key={page} page={`${page}`} active />;
          } else {
            return <Item size={size} key={page} page={`${page}`} />;
          }
        })}
      <Item size={size} page={`${totalPage}`} />
      <Item icon="right" size={size} disabled={current === totalPage} />
    </View>
  );

  const middleView = (
    <View name={`${prefix}`} style={paginationStyle.view}>
      <Item icon="left" size={size} disabled={current === 1} />
      <Item size={size} page="1" />
      <Ellipsis size={size} />
      {Array(5)
        .fill(' ')
        .map((e, i) => {
          const page = i + current - 2;
          if (current === page) {
            return <Item size={size} key={page} page={`${page}`} active />;
          } else {
            return <Item size={size} key={page} page={`${page}`} />;
          }
        })}
      <Ellipsis size={size} />
      <Item size={size} page={`${totalPage}`} />
      <Item icon="right" size={size} disabled={current === totalPage} />
    </View>
  );

  const normalView = (
    <View name={`${prefix}`} style={paginationStyle.view}>
      <Item icon="left" size={size} disabled={current === 1} />
      {pagesArray.map((e, i) => {
        const page = i + 1;
        if (current === page) {
          return <Item size={size} key={page} page={`${page}`} active />;
        } else {
          return <Item size={size} key={page} page={`${page}`} />;
        }
      })}
      <Item icon="right" size={size} disabled={current === totalPage} />
    </View>
  );

  // if total page large than 10, should show omit mode
  if (totalPage >= 10) {
    if (current < 4) {
      return frontView;
    } else if (current >= totalPage - 3) {
      return behindView;
    } else {
      return middleView;
    }
  }
  return normalView;
};

export default Pagination;
