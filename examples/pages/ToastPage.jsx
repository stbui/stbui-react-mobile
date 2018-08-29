import React, { Component } from 'react';
import { Panel, Toast, Modal } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="面板 Panel" />
        <Panel>
          <Panel.Header title="Header 内容" />
          <Panel.Body><Toast delay={5000} >指定5秒自动关闭</Toast></Panel.Body>
          <Panel.Footer title="Footer 内容" />
        </Panel>

        <Modal>
          <Modal.Header title="标题"></Modal.Header>
        </Modal>
      </Container>
    );
  }
}

export default Page;
