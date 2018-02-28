import React, { PureComponent } from 'react';
import { BasePanelHeaderProps } from './PropsType';
import styled from 'styled-components';
import { Title } from './Styled';

const Wrapper = styled.div`
  display: flex;
  padding: 25px 15px 7px 15px;
  color: #999;
  font-size: 14px;
`;

export interface PanelHeaderProps extends BasePanelHeaderProps {
  prefixCls?: string;
  className?: string;
}

export default class PanelHeader extends PureComponent<PanelHeaderProps, {}> {
  static defaultProps = {
    prefixCls: 'panel'
  };

  render() {
    const { title,...others } = this.props;

    return <Wrapper {...others}>{title && <Title>{title}</Title>}</Wrapper>;
  }
}
