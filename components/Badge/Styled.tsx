import styled from 'styled-components';

export const Wrapper = styled<any, any>('span')`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`;

export const Sup = styled<any, any>('sup')`
  display: flex;
  justify-content: center;
  align-items: center;
  top: auto;
  color: #fff;
  font-size: 12px;
  height: 19px;
  padding: 0 5px;
  white-space: nowrap;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background-color: #f00;

  ${({ shape }) => {
    if (shape === 'dot') {
      return `width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 50%;`;
    } else if (shape === 'radius') {
      return `border-radius: 4px;`;
    } else if (shape === 'round') {
      return `min-width: 19px;
      border-radius: 1000px;`;
    } else if (shape === 'circle') {
      return `width: 19px;
      border-radius: 50%;
      padding: 0;`;
    }
    return ``;
  }};

  ${({ sup }) =>
    sup &&
    `position: absolute;
  top: 0;
  right: 0;
  transform: translateX(50%) translateY(-50%);`};
`;
