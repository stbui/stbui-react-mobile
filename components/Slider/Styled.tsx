import styled, { css } from 'styled-components';

export const Wrapper = styled<any, 'div'>('div')`
  position: relative;
  width: 100%;
  margin: 14px 0;
  padding: 0 14px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `};
`;

export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: #d6d6d6;
`;
export const LineBg = styled.div`
  height: 100%;
  background-color: #12c287;
`;

export const Handle = styled.div`
  position: absolute;
  left: 0;
  top: -14px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

  width: 28px;
  height: 28px;
`;
