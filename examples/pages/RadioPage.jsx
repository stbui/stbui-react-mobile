import React, { Component } from 'react';
import { Panel, Cell } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="单选框 Radio" />
      </Container>
    );
  }
}

export default Page;
