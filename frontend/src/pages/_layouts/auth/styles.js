import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: #1f1b24;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 460px;
  text-align: center;

  h1 {
    margin-bottom: 15px;
    color: #fff;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #666666;
      margin: 0 0 10px;
      &::placeholder {
        color: #999999;
      }
    }
    span {
      color: #f64c75;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      margin-bottom: 15px;
      height: 44px;
      background: #03254c;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${lighten(0.03, '#03254c')};
      }
    }
  }

  a {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      font-weight: bold;
    }
  }
`;
