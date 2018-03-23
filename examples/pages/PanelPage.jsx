import React, { Component } from 'react';
import { Panel } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="面板 Panel" />
        <Panel>
          <Panel.Header title="Header 内容" />
          <Panel.Body>Body 内容</Panel.Body>
          <Panel.Footer title="Footer 内容" />
        </Panel>
      </Container>
    );
  }
}

export default Page;
