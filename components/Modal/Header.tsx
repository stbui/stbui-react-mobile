import React, { PureComponent } from 'react';
import { HeaderWrapper, HeaderTitle } from './Styled';

export default class Header extends PureComponent<any, any> {
  static defaultProps = {
    delay: 3000
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, children } = this.props;
    return (
      <HeaderWrapper>
        <HeaderTitle>{title}</HeaderTitle>
        {children}
      </HeaderWrapper>
    );
  }
}
