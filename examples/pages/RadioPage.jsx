import React, { Component } from 'react';
import { Panel, Cell, Radio } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="单选框 Radio" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell>
              <Radio>普通</Radio>
            </Cell>
            <Cell>
              <Radio checked>选中</Radio>
            </Cell>
            <Cell>
              <Radio disabled>禁用</Radio>
            </Cell>
            <Cell>
              <Radio checked disabled>选中且禁用</Radio>
            </Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
