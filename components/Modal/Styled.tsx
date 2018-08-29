import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: auto;
  z-index: 15;
`;

export const StyledPortal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 20px 15px 0;
  text-align: center;
`;

export const HeaderTitle = styled.div`
  font-size: 18px;
  line-height: 1;
  color: #333;
`;

export const BodyWrapper = styled.div`
  font-size: 15px;
  color: #999;
  padding: 15px;
  overflow: auto;
  user-select: auto;
  text-align: center;
`;
