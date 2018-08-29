import React, { PureComponent } from 'react';
import { Panel, Cell } from 'stbui';
import Container from '../components/Container';

class Page extends PureComponent {
  render() {
    const { history } = this.props;

    return (
      <Container>
        <Panel>
          <Panel.Header title="表单组件" />
          <Panel.Body>
            <Cell
              hasArrow
              title="Checkbox"
              description="复选框"
              onClick={() => history.push('/checkbox')}
            />
            <Cell
              hasArrow
              title="Radio"
              description="单选框"
              onClick={() => history.push('/radio')}
            />
            <Cell
              hasArrow
              title="Switch"
              description="开关"
              onClick={() => history.push('/switch')}
            />
            <Cell
              hasArrow
              title="Input"
              description="文本框"
              onClick={() => history.push('/input')}
            />
            <Cell
              hasArrow
              title="Picker & Select"
              description="选择器"
              onClick={() => history.push('/picker')}
            />
            <Cell
              hasArrow
              title="DatePicker & DateSelect"
              description="日期选择器"
              onClick={() => history.push('/datePicker')}
            />
            <Cell
              hasArrow
              title="Slider"
              description="滑动输入条"
              onClick={() => history.push('/slider')}
            />
            <Cell
              hasArrow
              title="FilePicker"
              description="文件选择器"
              onClick={() => history.push('/file-picker')}
            />
            <Cell
              hasArrow
              title="Stepper"
              description="步进器"
              onClick={() => history.push('/stepper')}
            />
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Header title="操作反馈" />
          <Panel.Body>
            <Cell
              hasArrow
              title="动作面板 ActionSheet"
              onClick={() => history.push('/action-sheet')}
            />
            <Cell
              hasArrow
              title="按钮 Button"
              onClick={() => history.push('/button')}
            />
            <Cell
              hasArrow
              title="模态框 Modal"
              onClick={() => history.push('/modal')}
            />
            <Cell
              hasArrow
              title="弹出框 Popup"
              onClick={() => history.push('/popup')}
            />
            <Cell
              hasArrow
              title="上拉加载下拉刷新 Pull"
              onClick={() => history.push('/pull')}
            />
            <Cell
              hasArrow
              title="滑动操作 SwipeAction"
              onClick={() => history.push('/swipe-action')}
            />
            <Cell
              hasArrow
              title="轻提示 Toast"
              onClick={() => history.push('/toast')}
            />
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Header title="数据展示" />
          <Panel.Body>
            <Cell
              hasArrow
              title="Accordion"
              description="手风琴"
              onClick={() => history.push('/accordion')}
            />
            <Cell
              hasArrow
              title="Badge"
              description="徽标"
              onClick={() => history.push('/badge')}
            />
            <Cell
              hasArrow
              title="Cell"
              description="列表项"
              onClick={() => history.push('/cell')}
            />
            <Cell
              hasArrow
              title="图标 Icon"
              onClick={() => history.push('/icon')}
            />
            <Cell
              hasArrow
              title="Message"
              description="消息"
              onClick={() => history.push('/message')}
            />
            <Cell
              hasArrow
              title="通告栏 NoticeBar"
              onClick={() => history.push('/notice-bar')}
            />
            <Cell
              hasArrow
              title="Panel"
              description="面板"
              onClick={() => history.push('/panel')}
            />
            <Cell
              hasArrow
              title="进度条 Progress"
              onClick={() => history.push('/progress')}
            />
            <Cell
              hasArrow
              title="指示器 Spinner"
              onClick={() => history.push('/spinner')}
            />
            <Cell
              hasArrow
              title="图片轮播 Swipe"
              onClick={() => history.push('/swipe')}
            />
            <Cell
              hasArrow
              title="Tab"
              description="标签页"
              onClick={() => history.push('/tab')}
            />
            <Cell
              hasArrow
              title="NavBar"
              description="导航栏"
              onClick={() => history.push('/nav-bar')}
            />
            <Cell
              hasArrow
              title="Upload"
              description="图片上传"
              onClick={() => history.push('/nav-bar')}
            />
            <Cell
              hasArrow
              title="Search"
              description="搜索"
              onClick={() => history.push('/nav-bar')}
            />
            <Cell
              hasArrow
              title="Area"
              description="省市县选择"
              onClick={() => history.push('/nav-bar')}
            />
            <Cell
              hasArrow
              title="navigation"
              description="导航栏"
              onClick={() => history.push('/nav-bar')}
            />
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Header title="图表展示" />
          <Panel.Body>
            <Cell hasArrow title="柱状图" />
          </Panel.Body>
        </Panel>
      </Container>
    );
  }
}

export default Page;
