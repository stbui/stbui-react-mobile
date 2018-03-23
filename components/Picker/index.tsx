import React, { PureComponent } from 'react';

export default class Picker extends PureComponent<any> {
  static defaultProps = {
    title: '请选择',
    cancelText: '取消',
    okText: '确定',
    dataSource: []
  };
  render() {
    return <div>1</div>;
  }
}
