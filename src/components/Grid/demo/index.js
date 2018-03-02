import React from 'react';
import { View, Text } from 'react-sketchapp-compatible';
import { Row, Col } from '../index';

const Block = ({ light = true, text = 'block' }) => (
  <View
    style={{
      backgroundColor: light ? 'rgba(0, 160, 233, 0.7)' : '#00a0e9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 100,
    }}
  >
    <Text style={{ color: '#fff' }}>{text}</Text>
  </View>
);

const Demo = () => (
  <View style={{ width: 400 }}>
    <Text>Basic: </Text>
    <Row style={{ marginBottom: 20 }}>
      <Col span={12}>
        <Block text="col-12" />
      </Col>
      <Col span={12}>
        <Block light={false} text="col-12" />
      </Col>
    </Row>
    <Row style={{ marginBottom: 20 }}>
      <Col span={8}>
        <Block text="col-8" />
      </Col>
      <Col span={8}>
        <Block light={false} text="col-8" />
      </Col>
      <Col span={8}>
        <Block text="col-8" />
      </Col>
    </Row>
    <Row style={{ marginBottom: 20 }}>
      <Col span={6}>
        <Block text="col-6" />
      </Col>
      <Col span={6}>
        <Block light={false} text="col-6" />
      </Col>
      <Col span={6}>
        <Block text="col-6" />
      </Col>
      <Col span={6}>
        <Block light={false} text="col-6" />
      </Col>
    </Row>

    <Text>Gutter: </Text>
    <Row gutter={48} style={{ marginBottom: 20 }}>
      <Col span={6}>
        <Block text="col-6" />
      </Col>
      <Col span={6}>
        <Block light={false} text="col-6" />
      </Col>
      <Col span={6}>
        <Block text="col-6" />
      </Col>
      <Col span={6}>
        <Block light={false} text="col-6" />
      </Col>
    </Row>

    <Text>Fixed width & auto width: </Text>
    <Row style={{ marginBottom: 20 }}>
      <Col style={{ width: 100 }}>
        <Block text="100" />
      </Col>
      <Col style={{ width: 'auto' }}>
        <Block light={false} text="auto" />
      </Col>
    </Row>

    <Text>Align: </Text>
    <Row align="center" justify="center" style={{ marginBottom: 20 }}>
      <Col align="center" justify="center" style={{ width: 100, height: 100 }}>
        <Text>Center</Text>
      </Col>
      <Col align="center" justify="center" style={{ width: 100, height: 100 }}>
        <Text>Center</Text>
      </Col>
      <Col align="center" justify="center" style={{ width: 100, height: 100 }}>
        <Text>Center</Text>
      </Col>
    </Row>

    <Text>Offset: </Text>
    <Row gutter={16} style={{ marginBottom: 20 }}>
      <Col span={8} offset={8}>
        <Block light={false} text="offset-8" />
      </Col>
      <Col span={8}>
        <Block text="col-8" />
      </Col>
    </Row>
  </View>
);

export default Demo;
