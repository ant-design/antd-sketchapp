import React from 'react';
import { View } from 'react-sketchapp-compatible';
import Br from '../../Common/Br';
import Checkbox from '../';

const Demo = () => (
  <View
    style={{
      // display: 'flex',
      // flexDirection: 'co',
    }}
  >
    <Checkbox />
    <Br />
    <Checkbox checked />
    <Br />
    <Checkbox focus />
    <Br />
    <Checkbox disabled />
    <Br />
    <Checkbox disabled checked />
    <Br />
    <Checkbox indeterminate />
    <Br />
    <Checkbox disabled indeterminate />
  </View>
);

export default Demo;
