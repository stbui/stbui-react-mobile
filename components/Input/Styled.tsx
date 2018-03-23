import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 0;

  input,
  textarea {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0;
    background-color: #fff;
    background-image: none;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    
    font-size: 100%;

    &::-webkit-input-placeholder {
        color: #a9a9a9;
      }
  }

  input {
    height: 21px;
  }

  textarea {
    display: block;
    line-height: 1.42857143;
    resize: none;
    word-break: break-all;
    word-wrap: break-word;
    background-color: transparent;
    overflow: visible;
  }
`;
