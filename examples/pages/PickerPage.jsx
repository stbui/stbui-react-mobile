import React, { Component } from 'react';
import { Panel, Cell, Switch } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="选择器 Picker & Select" />
        <Panel>
          <Panel.Header title="选择器 Picker" />
          <Panel.Body>
            <Cell description={<Switch checked disabled />}>禁止 开</Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
