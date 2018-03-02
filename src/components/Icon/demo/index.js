import React from 'react';
import { View } from 'react-sketchapp';
import Br from '../../Common/Br';
import Icon from '../';

const Demo = () => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Icon type="search" />
    <Br />
    <Icon type="check" />
    <Br />
    <Icon
      type="pause-circle"
      style={{
        color: 'blue',
      }}
    />
    <Br />
    <Icon
      type="clock-circle"
      style={{
        color: 'yellow',
        width: 20,
        height: 20,
      }}
    />
    <Br />
    <Icon
      type="pie-chart"
      style={{
        color: 'orange',
        width: 20,
        height: 20,
      }}
    />
    <Br />
    <Icon
      type="calendar"
      style={{
        color: 'green',
        width: 24,
        height: 24,
      }}
    />
    <Br />
    <Icon
      type="smile-o"
      style={{
        color: 'red',
        width: 30,
        height: 30,
      }}
    />
    <Br />
  </View>
);

export default Demo;
