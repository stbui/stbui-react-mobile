import React, { Component } from 'react';
import { Panel, Cell, Stepper } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="步进器 Stepper" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell title="普通" description={<Stepper />} />
            <Cell title="设置默认值" description={<Stepper value={10} />} />
            <Cell title="设置上下限" description={<Stepper max={3} min={-3} />} />
            <Cell title="设置步长 0.5" description={<Stepper step={0.5} />} />
            <Cell title="禁用状态" description={<Stepper disabled />} />
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
