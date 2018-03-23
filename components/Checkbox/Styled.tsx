import styled, { css } from 'styled-components';

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
    width: 5.71429px;
    height: 10px;
    border: 2px solid #f00;
    border-top: 0;
    border-left: 0;
    margin-top: -2px;
    transform: rotate(45deg) scale(0);
    transition: all 0.2s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  }

  ${({ checked }) =>
    checked &&
    css`
      border-color: #f00;
      &:before {
        transform: rotate(45deg) scale(1);
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      }
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: #bbb;
      cursor: not-allowed;

      &:before {
        border-color: #bbb;
      }
    `};
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
`;

interface TextProps {
  disabled?: boolean;
}

export const Text = styled<TextProps, 'span'>('span')`
  color: ${props => (props.disabled ? ` #bbb;` : '#333')};
  margin-left: 10px;
`;
