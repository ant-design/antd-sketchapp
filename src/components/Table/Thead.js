import React from 'react';
import { View } from 'react-sketchapp';
import Tr from './Tr';

export default (props) => {
  const { columns, bordered, size, title } = props;
  const childProps = {
    type: 'head',
    columns,
    bordered,
    title,
    size,
  };

  return (
    <View name="ant-table-thead">
      <Tr {...childProps} />
    </View>
  );
};
