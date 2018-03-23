import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import { PropsType } from './PropsType';
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
    const { type, ...other } = this.props;

    return createPortal(
      <Wrapper type={type} {...other}>
        {this.props.children}
      </Wrapper>,
      this.node
    );
  }
}
