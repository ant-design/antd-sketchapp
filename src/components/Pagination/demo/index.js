import React from 'react';
import { View } from 'react-sketchapp-compatible';
import Pagination from '../index';
import Br from '../../Common/Br';

const Demo = () => (
  <View>
    <Pagination current={1} total={50} />
    <Br />
    <Pagination current={1} total={500} />
    <Br />
    <Pagination current={20} total={500} />
    <Br />
    <Pagination current={47} total={500} />
    <Br />
    <Pagination current={1} total={50} size="small" />
    <Br />
    <Pagination current={1} total={500} size="small" />
    <Br />
    <Pagination current={20} total={500} size="small" />
    <Br />
    <Pagination current={47} total={500} size="small" />
  </View>
);

export default Demo;
