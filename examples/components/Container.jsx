import React, { Component } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background-color: #f6f6f6;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

class Container extends Component {
  componentDidMount() {
    if (this.props.className !== 'index-page') return;

    const scrollTop = window.sessionStorage[this.props.className];
    if (scrollTop) {
      this.container.scrollTop = scrollTop;
    }
  }

  componentWillUnmount() {
    if (this.props.className !== 'index-page') return;

    const scrollTop = this.container.scrollTop;
    window.sessionStorage[this.props.className] = scrollTop;
  }

  render() {
    const { className, children } = this.props;

    const cls = classnames({
      'app-container': true,
      [className]: !!className
    });

    return (
      <Wrapper
        ref={ele => {
          this.container = ele;
        }}
        className={cls}
        style={{ height: window.innerHeight }}
      >
        {children}
      </Wrapper>
    );
  }
}

export default Container;
