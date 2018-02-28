# stbui

移动端UI组件库，基于React。

## Install 安装

使用npm安装：
```bash
npm install stbui --save
```

## Usage 使用

#### 全组件引入

```js
import { Button, Cell } from 'stbui';
import 'stbui/dist/stbui.min.css';
```

#### 按需加载

* 方法一（推荐）

> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件

```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ['import', {
        libraryName: 'stbui',
        style: true,
        camel2DashComponentName: false,
      }],
    ]
  }
```
```js
import { Button, Cell } from 'stbui';
```

* 方法二：

```js
import Button from 'stbui/lib/Button';
import 'stbui/lib/Button/style';
```
