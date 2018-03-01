import React, { Component } from 'react';
import { Panel, Cell } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="文本框 Input" />
      </Container>
    );
  }
}

export default Page;
