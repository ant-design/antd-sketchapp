import React from 'react';
import { View } from 'react-sketchapp';
import Button from '../index';
import Br from '../../Common/Br';

const Demo = () => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <View
      style={{
        backgroundColor: '#eeeeee',
        padding: 20,
        flex: 1,
      }}
    >
      <Button text="default" />
      <Br />
      <Button text="dashed" type="dashed" />
      <Br />
      <Button text="primary" type="primary" />
      <Br />
      <Button text="danger" type="danger" />
      <Br />
      <Button text="disabled" disabled />
      <Br />
      <Button type="default" text="default-ghost" ghost />
      <Br />
      <Button type="primary" text="primary-ghost" ghost />
      <Br />
      <Button type="danger" text="danger-ghost" ghost />
      <Br />
      <Button type="dashed" text="dashed-ghost" ghost />
      <Br />
      <Button type="dashed" text="disabled-dashed-ghost" disabled ghost />
    </View>
    <View
      style={{
        backgroundColor: '#eeeeee',
        padding: 20,
        flex: 1,
      }}
    >
      <Button text="primary icon" type="primary" icon iconName="search" />
      <Br />
      <Button text="default icon" type="default" icon iconName="check" />
      <Br />
      <Button text="danger  icon" type="danger" icon iconName="close" />
      <Br />
      <Button text="dashed  icon" type="dashed" icon iconName="calendar" />
      <Br />
      <Button text="small size" size="small" type="danger" />
      <Br />
      <Button text="default size" type="default" />
      <Br />
      <Button text="large size" size="large" type="primary" />
      <Br />
    </View>
  </View>
);

export default Demo;
