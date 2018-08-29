import React, { Component } from 'react';
import { NavBar } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="面板 NavBar" />
        <NavBar />
      </Container>
    );
  }
}

export default Page;
