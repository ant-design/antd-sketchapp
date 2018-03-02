import React from 'react';
import { View, Text } from 'react-sketchapp-compatible';
import Table from '../index';
import Br from '../../Common/Br';
import defaultConfig from '../mock.json';

const Demo = () => (
  <View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          flex: 1,
        }}
      >
        <Text> Default: </Text>
        <Br />
        <Table {...defaultConfig} />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          flex: 1,
        }}
      >
        <Text> Bordered && Has Title && Has Footer && Checkable && Expandable: </Text>
        <Br />
        <Table
          {...Object.assign({}, defaultConfig, {
            title: true,
            footer: true,
            checkable: true,
            bordered: true,
            expandable: true,
          })}
        />
      </View>
    </View>
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            flex: 1,
          }}
        >
          <Text> Small Size: </Text>
          <Br />
          <Table
            {...Object.assign({}, defaultConfig, {
              size: 'small',
            })}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            flex: 1,
          }}
        >
          <Text>
            {' '}
            Small Size && Bordered && Has Title && Has Footer && Checkable && Expandable:{' '}
          </Text>
          <Br />
          <Table
            {...Object.assign({}, defaultConfig, {
              title: true,
              footer: true,
              checkable: true,
              bordered: true,
              expandable: true,
              size: 'small',
            })}
          />
        </View>
      </View>
    </View>
  </View>
);

export default Demo;
