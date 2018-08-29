import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper } from './Styled';
import Portal from '../Portal';

export default class Modal extends PureComponent<PropsType, any> {
  static Header: any;

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

  componentDidMount() {}

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
        <Portal type="transparent">
          <Wrapper>{children}</Wrapper>
        </Portal>
      )
    );
  }
}
