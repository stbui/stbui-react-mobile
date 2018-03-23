import React, { PureComponent } from 'react';
import { PropsType } from './PropsType';
import {
  ItemWraper,
  ItemContent,
  ItemContentInner,
  ItemTitle,
  ItemArrow
} from './Styled';

export default class AccordionItem extends PureComponent<PropsType, any> {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      active: props.open || false
    };
  }

  handleTitleClick = () => {
    const { active } = this.state;
    this.setState({
      active: !active
    });
  };

  render() {
    const { children, title, open } = this.props;
    const { active } = this.state;

    return (
      <ItemWraper>
        <ItemTitle onClick={this.handleTitleClick}>
          <div>{title}</div>
          {!open && <ItemArrow active={active} />}
        </ItemTitle>
        <ItemContent active={active || open}>
          <ItemContentInner> {children}</ItemContentInner>
        </ItemContent>
      </ItemWraper>
    );
  }
}
