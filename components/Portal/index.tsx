import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
// import { PropsType } from './PropsType';
import { Wrapper } from './Styled';

export default class Portal extends PureComponent<any, any> {
  private node;
  constructor(props) {
    super(props);

    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render() {
    const { children, type, onClick, ...other } = this.props;

    return createPortal(
      <Wrapper type={type} onClick={onClick} {...other}>
        {children}
      </Wrapper>,
      this.node
    );
  }
}
