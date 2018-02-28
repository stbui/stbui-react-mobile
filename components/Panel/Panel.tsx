import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

export interface PanelProps {
  prefixCls?: string;
  className?: string;
}

export default class Panel extends PureComponent<PanelProps, {}> {

  static Header: any;
  static Body: any;
  static Footer: any;

  static defaultProps = {
    prefixCls: 'panel',
  };

  render() {
    const {children } = this.props;
    return <Wrapper>{children}</Wrapper>
  }
}
