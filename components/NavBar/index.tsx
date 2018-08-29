import React, { PureComponent } from 'react';
import { Wrapper } from './Styled';

export default class NavBar extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div>返回</div>
        <div>标题</div>
        <div>按钮</div>
      </Wrapper>
    );
  }
}
