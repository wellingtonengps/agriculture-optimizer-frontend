import styled from "styled-components";

type Props = {
  color: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  border-radius: 40px;
  height: 150px;
  width: 250px;

  cursor: pointer;

  span {
    margin: 0;
  }
`;
