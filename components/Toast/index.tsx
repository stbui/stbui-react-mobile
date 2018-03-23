import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, StyledPortal } from './Styled';
import Portal from '../Portal';

export default class Toast extends PureComponent<PropsType, any> {
  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    const { timer } = this.props;
    this.timer = setTimeout(() => {
      this.onClose();
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClose() {
    this.setState({ show: false });
  }

  handleClick = () => {
    const { show } = this.state;
  };

  render() {
    const { children } = this.props;
    const { show } = this.state;

    return (
      show && (
        <Portal
          type="transparent"
          style={StyledPortal}
          onClick={this.handleClick}
        >
          <Wrapper>指定3秒自动关闭</Wrapper>
        </Portal>
      )
    );
  }
}
