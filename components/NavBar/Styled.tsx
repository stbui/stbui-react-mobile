import styled from 'styled-components';

export const Wrapper = styled<any, any>('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 46px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid #e5e5e5;
    border-width: 1px 0;
  }
`;
