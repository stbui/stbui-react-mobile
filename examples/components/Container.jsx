import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background-color: #f6f6f6;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

class Container extends Component {
  render() {
    const { children } = this.props;

    return (
      <Wrapper
        ref={ele => {
          this.container = ele;
        }}
      >
        {children}
      </Wrapper>
    );
  }
}

export default Container;
