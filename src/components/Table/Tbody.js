import React from 'react';
import { View } from 'react-sketchapp';
import Tr from './Tr';

/**
 * 行没有第边框的条件：
 * - 最后一行
 *  - hasFooter
 *  - bordered
 *  - !hasFooter && size == 'small'
 */
export default (props) => {
  const { dataSource, columns, bordered, size, hasFooter } = props;

  const childProps = {
    type: 'body',
    columns,
    bordered,
    size,
  };

  return (
    <View name="ant-table-tbody">
      {dataSource.map((item, i) => (
        <Tr
          key={item.key}
          noBottomBorder={
            dataSource.length - 1 === i &&
            ((!hasFooter && size === 'small') ||
              (bordered && !hasFooter) ||
              (size === 'small' && hasFooter && !bordered))
          }
          item={item}
          {...childProps}
        />
      ))}
    </View>
  );
};
