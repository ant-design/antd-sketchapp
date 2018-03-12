import React from 'react';
import { Text } from 'react-sketchapp';
import Br from '../../Common/Br';
import { Row, Col } from '../../Grid';
import List from '../';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Demo = () => (
  <Row gutter={24}>
    <Col span={12}>
      <Text>Simple List: </Text>
      <Br />
      <List
        header={<List.Text>Header</List.Text>}
        footer={<List.Text>Footer</List.Text>}
        dataSource={data}
        renderItem={item => (<List.Item><List.Text>{item}</List.Text></List.Item>)}
      />
    </Col>
    <Col span={12}>
      <Text>Simple Bordered List: </Text>
      <Br />
      <List
        header={<List.Text>Header</List.Text>}
        footer={<List.Text>Footer</List.Text>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item><List.Text>{item}</List.Text></List.Item>)}
      />
    </Col>
  </Row>
);

export default Demo;
