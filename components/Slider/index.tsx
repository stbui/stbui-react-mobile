import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, Line, LineBg, Handle } from './Styled';

export default class Slider extends PureComponent<PropsType, any> {
  static defaultProps = {
    disabled: false,
    step: 1,
    min: 0,
    max: 100
  };

  private line;

  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(props, 0),
      offset: 0
    };
  }

  componentDidMount() {
    this.init();
  }

  getValue(props, defaultValue) {
    if ('value' in props) {
      return props.value;
    }

    return defaultValue;
  }

  getValueByOffset = offset => {
    const { min, max, step } = this.props;
    const percent = offset / this.maxOffset();
    const value = Math.round((min + (max - min) * percent) / step) * step;
    return Math.max(Math.min(value, max), min);
  };

  getOffsetByValue = value => {
    const { min, max } = this.props;
    return this.maxOffset() * ((value - min) / (max - min));
  };

  maxOffset = () => {
    return this.line ? this.line.offsetWidth : 0;
  };

  init = () => {
    const offset = this.getOffsetByValue(this.state.value);
    this.setState({ offset });
  };

  render() {
    const { disabled } = this.props;
    const { offset } = this.state;

    return (
      <Wrapper disabled={disabled}>
        <Line
          innerRef={ele => {
            this.line = ele;
          }}
        >
          <LineBg style={{ width: offset }} />
        </Line>
        <Handle style={{ left: offset }} />
      </Wrapper>
    );
  }
}
