import styled, { css } from 'styled-components';

const checked = ({ checked }) =>
  checked &&
  css`
    border-color: #f00;
    &:before {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    }
  `;

const disabled = ({ disabled }) =>
  disabled &&
  css`
    border-color: #bbb;
    cursor: not-allowed;

    &:before {
      background-color: #bbb;
    }
  `;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Inner = styled<any, any>('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  border-radius: 50%;
  background: #fff;

  &:before {
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #f00;
    transform: scale(0);
    transition: all 0.2s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  }

  ${checked}${disabled}
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  // default css
  margin: 0;
`;

export const Text = styled<any, 'span'>('span')`
  color: ${props => (props.disabled ? ` #bbb;` : '#333')};
  margin-left: 10px;
`;
