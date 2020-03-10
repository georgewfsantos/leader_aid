import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  height: 80px;
  max-width: 780px;
  width: 100%;
  border-radius: 4px;
  margin: 0 0 5px;
  justify-content: center;

  align-items: center;

  .info {
    display: flex;
    width: 700px;
    justify-content: space-between;
    height: 100%;
    font-size: 18px;

    #name {
      width: 50%;
    }

    #phone {
      display: flex;
      width: 33%;
      align-items: center;
      justify-content: center;
    }

    .button {
      button {
        background: none;
        border: 0;
      }
    }
  }
`;
