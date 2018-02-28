import React, { PureComponent } from 'react';
import { BasePanelFooterProps } from './PropsType';
import styled from 'styled-components';
import { Title } from './Styled';

const Wrapper = styled.div`
  display: flex;
  padding: 7px 15px;
  margin-bottom: 10px;
  color: #999;
  font-size: 12px;
`;

export interface PanelFooterProps extends BasePanelFooterProps {
  prefixCls?: string;
  className?: string;
}

export default class PanelFooter extends PureComponent<PanelFooterProps, {}> {
  static defaultProps = {
    prefixCls: 'panel'
  };

  render() {
    const { title,...others } = this.props;

    return <Wrapper {...others}>{title && <Title>{title}</Title>}</Wrapper>;
  }
}
