import React, { Component } from 'react';
import { Panel, Cell, Tab } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="标签页 Tab" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Tab>
              <Tab.Panel title="选项卡1">选项卡1内容</Tab.Panel>
              <Tab.Panel title="选项卡2">选项卡2内容</Tab.Panel>
            </Tab>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="指定默认值" />
          <Panel.Body>
            <Tab value={1}>
              <Tab.Panel title="选项卡1">选项卡1内容</Tab.Panel>
              <Tab.Panel title="选项卡2">选项卡2内容</Tab.Panel>
              <Tab.Panel title="选项卡3">选项卡3内容</Tab.Panel>
            </Tab>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Tab>
              <Tab.Panel title="选项卡1">选项卡1内容</Tab.Panel>
              <Tab.Panel title="选项卡2" disabled>选项卡2内容</Tab.Panel>
              <Tab.Panel title="选项卡3">选项卡3内容</Tab.Panel>
            </Tab>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
