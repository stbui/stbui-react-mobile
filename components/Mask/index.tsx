import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper } from './Styled';

export default class Mask extends PureComponent<PropsType, any> {
  static defaultProps = {
    visible: false
  };
  render() {
    const { visible, onClick, type, ...other } = this.props;
    return visible && <Wrapper type={type} onClick={onClick} {...other} />;
  }
}
