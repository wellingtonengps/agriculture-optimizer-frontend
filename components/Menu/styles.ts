import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  min-width: 85px;
  height: 1024px;
  background-color: #272727;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 39px;

  a {
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 57px;
    margin-bottom: 60px;
    background-color: transparent;
    border: none;

    :hover {
      color: #aac700;
    }
  }
`;
