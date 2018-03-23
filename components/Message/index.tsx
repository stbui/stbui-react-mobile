import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, Header, Body, Footer, StyledIcon } from './Styled';

export default class Message extends PureComponent<PropsType, any> {
  static defaultProps = {
    hasArrow: false,
    hasClosable: false
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onClick = () => {
    const { hasArrow, onClick } = this.props;
    if (hasArrow && typeof onClick === 'function') {
      onClick();
    }
  };
  render() {
    const { children, icon, hasClosable, hasArrow } = this.props;
    const iconRender = icon && <StyledIcon>{icon}</StyledIcon>;
    const renderCloseIcon = hasClosable && <i />;
    const renderArrow = hasArrow && <i />;
    const noFooter = !hasClosable && !hasArrow;

    return (
      <Wrapper onClick={this.onClick}>
        <Header>{iconRender}</Header>
        <Body>{children}</Body>
        {!noFooter && (
          <Footer>
            {renderArrow}
            {renderCloseIcon}
          </Footer>
        )}
      </Wrapper>
    );
  }
}
