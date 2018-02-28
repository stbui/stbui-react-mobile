import React, { PureComponent } from 'react';
import PropsType from './PropsType';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  user-select: none;

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-width: 0;
    border-radius: 0;
    border-top: 1px solid #ddd;
    left: 15px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
      border-radius: 0;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      width: 300%;
      height: 300%;
      transform: scale(0.33333333);
      border-radius: 0;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 15px;
  min-height: 45px;
`;

const InnerActive = Inner.extend`
  &:active {
    background-color: #ddd;
  }
`;

const Header = styled.div``;

const Icon = styled.div`
  width: 28px;
  height: 28px;
  text-align: center;
  margin-right: 15px;
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
`;
const Title = styled.div`
  width: 100px;
  padding: 12px 0;
  overflow: hidden;
  color: #333;

  flex: 1;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  text-align: right;
  font-size: 14px;
  color: #999;
`;

const Arrow = styled.div`
  margin-left: 5px;
  &:after {
    display: inline-block;
    content: '';
    border-right: 2px solid #c7c7cc;
    border-top: 2px solid #c7c7cc;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }
`;

const Content = styled.div``;

export interface CellProps extends PropsType {
  prefixCls?: string;
  className?: string;
}

export default class Cell extends PureComponent<CellProps, {}> {
  static defaultProps = {
    prefixCls: 'cell',
    hasArrow: false,
    disabled: false
  };

  render() {
    const {
      hasArrow,
      icon,
      title,
      description,
      disabled,
      onClick,
      children,
      ...others
    } = this.props;

    const iconRender = icon && <Icon>{icon}</Icon>;
    const titleRender = title && <Title>{title}</Title>;
    const contentRender = children && <Content>{children}</Content>;
    const arrowRender = hasArrow && <Arrow />;

    return (
      <Wrapper onClick={onClick} onTouchStart={() => {}} {...others}>
        {!!onClick ? (
          <InnerActive>
            <Header>{iconRender}</Header>
            <Body>
              {titleRender}
              {contentRender}
            </Body>
            <Footer>{description}</Footer>
            {arrowRender}
          </InnerActive>
        ) : (
          <Inner>
            <Header>{iconRender}</Header>
            <Body>
              {titleRender}
              {contentRender}
            </Body>
            <Footer>{description}</Footer>
            {arrowRender}
          </Inner>
        )}
      </Wrapper>
    );
  }
}
