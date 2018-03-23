import React, { PureComponent } from 'react';

interface PanelProps {}

export default class Panel extends PureComponent<PanelProps, {}> {
  static Header: any;
  static Body: any;
  static Footer: any;

  static defaultProps = {};

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
