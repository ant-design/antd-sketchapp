import React from 'react';
import { View } from 'react-sketchapp';
import Table from './Table';

const Wrapper = props => (
  <View
    name="antd-table"
    style={{
      width: props.widthValue || 800,
      // height: 1200,
      // padding: 20
    }}
  >
    <Table {...props} />
  </View>
);

export default Wrapper;
