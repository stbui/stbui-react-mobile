import styled from 'styled-components';

export const Wrapper = styled<any, any>('div')`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;

  ${({ type }) => type && `background-color: transparent;`};
`;
