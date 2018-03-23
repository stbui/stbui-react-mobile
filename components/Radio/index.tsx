import React, { PureComponent } from 'react';
import { BaseRadioProps } from './PropsType';
import { Container, Wrapper, Inner, Input, Text } from './Styled';

export default class Radio extends PureComponent<BaseRadioProps, any> {
  static defaultProps = {
    disabled: false
  };

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

  handleChange = () => {
    const { onChange } = this.props;
    const checked = !this.state.checked;
    this.setState({ checked });

    if (onChange) {
      onChange(checked);
    }
  };

  render() {
    const { children, disabled } = this.props;
    const { checked } = this.state;

    const renderCheckbox = (
      <Container>
        <Wrapper>
          <Inner checked={checked} disabled={disabled} />
          {children && <Text disabled={disabled}>{children}</Text>}
          <Input
            type="radio"
            disabled={disabled}
            checked={checked}
            onChange={this.handleChange}
          />
        </Wrapper>
      </Container>
    );

    return renderCheckbox;
  }
}
