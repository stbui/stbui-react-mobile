import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, Button, Input } from './Styled';

export default class Stepper extends PureComponent<PropsType, any> {
  static defaultProps = {
    disabled: false,
    step: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(props, 0),
      lastValue: this.getValue(props, 0)
    };
  }

  getValue(props, defaultValue) {
    if ('value' in props) {
      return props.value;
    }

    return defaultValue;
  }

  handleSubClick = () => {
    const { step } = this.props;
    const { value } = this.state;

    if (this.isSubDisabled()) {
      return;
    }

    if (step) {
      const newValue = value - step;
      this.onInputBlur(newValue);
    }
  };

  handlePlusClick = () => {
    const { step } = this.props;
    const { value } = this.state;

    if (this.isPlusDisabled()) {
      return;
    }

    const newValue = value + step;
    this.onInputBlur(newValue);
  };

  onInputChange = value => {
    const { onInputChange } = this.props;
    this.setState({ value });
    if (typeof onInputChange === 'function') {
      onInputChange(value);
    }
  };

  onInputBlur = value => {
    const { min, max, onChange } = this.props;
    value = Number(value);
    if (value === '' || isNaN(value)) {
      value = this.state.lastValue;
    }
    if (min !== null && min !== undefined && value < min) {
      value = min;
    }
    if (max !== null && max !== undefined && value > max) {
      value = max;
    }
    this.setState({
      value,
      lastValue: value
    });
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  isSubDisabled = () => {
    const { min, disabled } = this.props;
    const { value } = this.state;

    return (min && value <= min) || disabled;
  };

  isPlusDisabled = () => {
    const { max, disabled } = this.props;
    const { value } = this.state;

    return (max && value >= max) || disabled;
  };

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Button disabled={this.isSubDisabled()} onClick={this.handleSubClick}>
          -
        </Button>
        <Input
          type="tel"
          value={value}
          onChange={e => this.onInputChange(e.target.value)}
          onBlur={() => this.onInputBlur(value)}
        />
        <Button disabled={this.isPlusDisabled()} onClick={this.handlePlusClick}>
          +
        </Button>
      </Wrapper>
    );
  }
}
