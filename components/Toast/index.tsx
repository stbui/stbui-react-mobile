import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, StyledPortal } from './Styled';
import Portal from '../Portal';

export default class Toast extends PureComponent<PropsType, any> {
  private timer: number;
  static defaultProps = {
    delay: 3000
  };

  constructor(props) {
    super(props);
    this.state = {
      show: this.getPortalProps(props)
    };
  }

  getPortalProps(props) {
    if ('portal' in props) {
      return props.portal;
    }

    return true;
  }

  componentDidMount() {
    const { delay } = this.props;
    this.timer = setTimeout(() => {
      this.onClose();
    }, delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClose() {
    this.setState({ show: false });
  }

  handleClick = () => {
    // this.onClose()
  };

  render() {
    const { show } = this.state;
    const { children } = this.props;

    return (
      show && (
        <Portal
          type="transparent"
          onClick={this.handleClick}
          style={StyledPortal}
        >
          <Wrapper>{children}</Wrapper>
        </Portal>
      )
    );
  }
}
