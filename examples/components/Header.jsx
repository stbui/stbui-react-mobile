import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  font-size: 16px;
`;

class Header extends Component {
  render() {
    const { title } = this.props;

    return <Wrapper>{title}</Wrapper>;
  }
}

export default Header;
