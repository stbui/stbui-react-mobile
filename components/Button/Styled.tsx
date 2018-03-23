import styled, { css } from 'styled-components';

const isBlock = ({ block }) =>
  block &&
  css`
    width: 100%;
    display: block;
  `;

const isDisabled = ({ disabled }) =>
  disabled &&
  css`
    opacity: 0.5;
    color: rgba(51, 51, 51, 0.5);
    cursor: not-allowed;
  `;

export const Wrapper = styled<any, any>('button')`
  display: inline-block;
  position: relative;
  padding: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
  cursor: pointer;
  outline: 0 none;
  user-select: none;
  padding: 0 15px;
  font-size: 18px;
  height: 45px;
  line-height: 45px;
  background-color: #ddd;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 0;

  &:active {
    opacity: 0.7;
  }

  ${isBlock};
  ${isDisabled};
`;
