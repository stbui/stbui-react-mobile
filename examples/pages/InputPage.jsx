import React, { Component } from 'react';
import { Panel, Cell, Input } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="文本框 Input" />
        <Panel>
          <Panel.Header title="普通" />
          <Panel.Body>
            <Cell title="单行文本" ><Input placeholder="请输入" /></Cell>
            <Cell title="多行文本" ><Input type="textarea" rows="3" placeholder="请输入" /></Cell>
            <Cell title="数字"><Input type="number" placeholder="请输入数字" /></Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
