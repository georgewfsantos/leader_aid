import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 460px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    max-height: 500px;
    input {
      background: rgba(255, 255, 255);
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
    hr {
      border: 0;
      text-align: center;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
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
`;

export const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
`;
