import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper } from './Styled';

export default class Button extends PureComponent<PropsType, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}
