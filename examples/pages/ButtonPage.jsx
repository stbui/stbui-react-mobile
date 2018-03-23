import React, { Component } from 'react';
import { Panel, Button } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="按钮 Button" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Button>Button</Button>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Header title="块级按钮" />
          <Panel.Body>
            <Button block>Button</Button>
            <Button block disabled>Button</Button>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
