import React, { PureComponent } from 'react';
import { Wrapper } from './Styled';

export default class InputNumber extends PureComponent {
  render() {
    const { ...other } = this.props;
    return (
      <Wrapper>
         <input type="text" {...other} />
      </Wrapper>
    );
  }
}
