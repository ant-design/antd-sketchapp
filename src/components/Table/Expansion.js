import React from 'react';
import { View } from 'react-sketchapp-compatible';
import Icon from '../Icon';

/**
 * 行没有第边框的条件：
 * - 最后一行
 *  - hasFooter
 *  - bordered
 *  - !hasFooter && size == 'small'
 */
export default (props) => {
  const { style } = props;

  console.log(JSON.stringify(props));

  return (
    <View
      name="expansion"
      style={Object.assign(
        {},
        {
          padding: 3,
        },
        style
      )}
    >
      <Icon
        type="plus"
        style={{
          height: 8,
          width: 8,
        }}
      />
    </View>
  );
};
