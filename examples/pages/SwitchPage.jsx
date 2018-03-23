import React, { Component } from 'react';
import { Panel, Cell, Switch } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="开关 Switch" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell description={<Switch />}>关</Cell>
            <Cell description={<Switch checked />}>开</Cell>
            <Cell description={<Switch disabled />}>禁止 关</Cell>
            <Cell description={<Switch checked disabled />}>禁止 开</Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
