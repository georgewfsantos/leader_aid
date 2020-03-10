import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  max-width: 460px;

  height: 400px;

  background: #fff;
  border-radius: 4px;

  .info {
    display: flex;
    align-items: center;
    align-content: flex-end;
    flex-direction: column;
    width: 80%;
    height: 80%;

    .button {
      justify-self: flex-end;
      margin-top: 9rem;

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
        width: 9rem;
        margin: 5px;
        transition: background 0.2s;
        &:hover {
          background: ${lighten(0.03, '#03254c')};
        }
      }
    }

    strong {
      margin-bottom: 10px;
      font-size: 16px;
      padding: 4px;
      background: #dddd;
      width: 100%;
      text-align: center;
      color: #03254c;
    }
  }
`;
