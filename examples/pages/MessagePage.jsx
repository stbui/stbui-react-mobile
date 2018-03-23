import React, { Component } from 'react';
import { Panel, Cell, Message } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="消息 Message" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Message>普通</Message>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
