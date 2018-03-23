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

export default class PanelHeader extends PureComponent<BasePanelHeaderProps, {}> {
  static defaultProps = {
  };

  render() {
    const { title, ...others } = this.props;

    return <Wrapper {...others}>{title && <Title>{title}</Title>}</Wrapper>;
  }
}
