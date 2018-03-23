import React, { Component } from 'react';
import { Panel, Cell, Slider } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="滑动输入条 Slider" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell title="普通">
              <Slider value={0} />
            </Cell>
            <Cell title="设置默认值">
              <Slider value={20} />
            </Cell>
            <Cell title="设置上下限">
              <Slider min={-100} max={100} value={0} />
            </Cell>
            <Cell title="禁用状态">
              <Slider value={20} disabled />
            </Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
