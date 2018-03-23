import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

class Header extends Component {
  render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default Header;
