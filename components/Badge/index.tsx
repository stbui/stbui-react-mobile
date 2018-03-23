import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, Sup } from './Styled';

export default class Badge extends PureComponent<PropsType, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, text, shape, sup } = this.props;

    return (
      <Wrapper>
          {children}
        <Sup shape={shape} sup={sup}>{text}</Sup>
      </Wrapper>
    );
  }
}
