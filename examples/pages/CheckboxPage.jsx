import React, { Component } from 'react';
import { Panel, Cell, Checkbox } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="复选框 Checkbox" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell>
              <Checkbox>普通</Checkbox>
            </Cell>
            <Cell>
              <Checkbox checked>选中</Checkbox>
            </Cell>
            <Cell>
              <Checkbox disabled>禁用</Checkbox>
            </Cell>
            <Cell>
              <Checkbox checked disabled>
                选中且禁用
              </Checkbox>
            </Cell>
            <Cell>
              <Checkbox onChange={checked => console.log(checked)}>
                onChnage事件
              </Checkbox>
            </Cell>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
