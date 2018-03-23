import React, { PureComponent, CSSProperties } from 'react';
import { PropsType } from './PropsType';
import { Wrapper, Header, Line, Content, Ul, Li } from './Styled';
import TabPanel from './Panel';

export default class Tab extends PureComponent<PropsType, any> {
  static Panel: any;

  static defatulProps = {
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || this.getActiveIndex(props.children) || 0
    };
  }

  getActiveIndex(children) {
    let activeIndex;
    React.Children.forEach(children, (item: any, index) => {
      if (item.props && item.props.active) {
        activeIndex = index;
      }
    });
    return activeIndex;
  }

  handleClick = (tab, index) => {
    const { disabled, onChange } = this.props;

    if (disabled || tab.props.disabled) {
      return;
    }

    this.setState({ value: index });

    if (onChange) {
      onChange(index);
    }
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;
    const renderLi = React.Children.map(children, (items: any, index) => {
      return (
        <Li
          active={value === index}
          disabled={items.props.disabled}
          onClick={() => this.handleClick(items, index)}
        >
          {items.props.title}
        </Li>
      );
    });

    const renderContent = React.Children.map(children, (items: any, index) => {
      return <TabPanel active={value === index} {...items.props} />;
    });

    const lineStyle: CSSProperties = {
      width: `${100 / children.length}%`,
      left: `${value / children.length * 100}%`
    };

    return (
      <Wrapper>
        <Header>
          <Ul>{renderLi}</Ul>
          <Line style={lineStyle} />
        </Header>
        <Content>{renderContent}</Content>
      </Wrapper>
    );
  }
}
