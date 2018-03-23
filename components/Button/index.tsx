import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper } from './Styled';

export default class Button extends PureComponent<PropsType, any> {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.getChecked(props)
    };
  }

  getChecked(props) {
    if ('checked' in props && props.checked) {
      return props.checked;
    }
    return false;
  }

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    const { block, disabled, children } = this.props;

    return (
      <Wrapper disabled={disabled} block={block} onClick={this.handleClick}>
        {children}
      </Wrapper>
    );
  }
}
