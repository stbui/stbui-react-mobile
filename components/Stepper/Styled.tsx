import styled, { css } from 'styled-components';

const disabled = ({ disabled }) =>
  disabled &&
  css`
    color: #bbb;
    border-color: #e1e1e1;
    cursor: not-allowed;
  `;

export const Wrapper = styled.span`
  display: flex;
  user-select: none;
`;

export const Button = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 27px;
  height: 27px;
  line-height: 27px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  color: #f00;
  border: 1px solid #f00;

  ${disabled};
`;

export const Input = styled.input`
  width: 40px;
  height: 27px;
  margin: 0 10px;
  padding: 0;
  font-size: 16px;
  color: #333;
  text-align: center;
  border: 0;
  outline: 0;
`;
