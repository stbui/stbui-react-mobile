import React, { Component } from 'react';
import { Panel, Accordion } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="手风琴 Accordion" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Accordion>
              <Accordion.Item title="2018">
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
              <Accordion.Item title="2019">
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
            </Accordion>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="默认打开" />
          <Panel.Body>
            <Accordion>
              <Accordion.Item title="2018" active>
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
              <Accordion.Item title="2019">
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
            </Accordion>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="强制打开" />
          <Panel.Body>
            <Accordion>
              <Accordion.Item title="2018" open>
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
              <Accordion.Item title="2019">
                <div>大数据</div>
                <div>人工智能</div>
                <div>物联网</div>
              </Accordion.Item>
            </Accordion>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
