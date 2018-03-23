import React, { Component } from 'react';
import { Panel, Cell, Badge } from 'stbui';
import Container from '../components/Container';
import Header from '../components/Header';

const body = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 25,
  background: '#fff'
};

const box = {
  width: 30,
  height: 30,
  background: '#ddd'
};

class Page extends Component {
  render() {
    return (
      <Container>
        <Header title="面板 Badge" />
        <Panel>
          <Panel.Header title="基本" />
          <Panel.Body>
            <Cell
              hasArrow
              title="点状"
              description={<Badge shape="dot" />}
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title="直角"
              description={<Badge text="免费" />}
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title="圆角"
              description={<Badge shape="radius" text="new" />}
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title="椭圆形"
              description={<Badge shape="round" text="999+" />}
              onClick={() => {}}
            />
            <Cell
              hasArrow
              title="圆形"
              description={<Badge shape="circle" text={3} />}
              onClick={() => {}}
            />
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="上标位置" />
          <Panel.Body style={body}>
            <div>
              <Badge sup shape="dot">
                <div style={box} />
              </Badge>
            </div>
            <div>
              <Badge sup shape="radius" text="new">
                <div style={box} />
              </Badge>
            </div>
            <div>
              <Badge sup shape="round" text="999+">
                <div style={box} />
              </Badge>
            </div>
            <div>
              <Badge sup shape="circle" text={3}>
                <div style={box} />
              </Badge>
            </div>
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
