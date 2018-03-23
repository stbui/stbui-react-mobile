import React, { PureComponent } from 'react';
import { Wrapper } from './Styled';

export default class InputTextarea extends PureComponent {
  render() {
    const { ...other } = this.props;
    return (
      <Wrapper>
        <textarea {...other} />
      </Wrapper>
    );
  }
}
