import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const ItemWraper = styled<any, any>('div')``;
export const ItemTitle = styled.div`
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-width: 0;
    border-radius: 0;
    border-top: 1px solid #ddd;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
      border-radius: 0;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      width: 300%;
      height: 300%;
      transform: scale(0.33333333);
      border-radius: 0;
    }
  }
`;
export const ItemContent = styled<any, any>('div')`
  position: relative;
  height: 0;
  overflow: hidden;
  transition: all 0.15s ease-out;

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-width: 0;
    border-radius: 0;
    border-top: 1px solid #ddd;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
      border-radius: 0;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
      width: 300%;
      height: 300%;
      transform: scale(0.33333333);
      border-radius: 0;
    }
  }

  ${({ active }) =>
    active &&
    css`
      height: auto;
    `};
`;
export const ItemContentInner = styled.div`
  padding: 9px 15px;
`;
export const ItemArrow = styled<any, any>('div')`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 17px;
  right: 15px;
  border-right: 2px solid #c7c7cc;
  border-bottom: 2px solid #c7c7cc;
  transform: rotate(45deg);
  transition: transform 0.15s ease-out;

  ${({ active }) =>
    active &&
    css`
      transform: rotate(-135deg);
    `};
`;
