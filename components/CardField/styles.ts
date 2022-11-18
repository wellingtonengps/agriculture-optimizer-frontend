import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d1eedb;
  border-radius: 40px;
  height: 134px;
  width: 190px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  span {
    margin: 0;
  }
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  border: none;
  font-size: 25px;
  color: #ffffff;

  align-self: flex-end;
  margin-top: -16px;
  margin-right: 19px;

  :hover {
    color: #955;
  }
`;
