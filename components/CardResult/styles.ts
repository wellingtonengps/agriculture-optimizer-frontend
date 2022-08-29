import styled from "styled-components";

export const WrapperGrid = styled.div`
  display: flex;
`;

export const gridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 100px;
  margin-top: 40px;
`;

export const Container = styled.div`
  height: 100;
  width: 100;
  background-color: "#333";
  display: "flex";
  align-items: "center";
  justify-content: "center";
  margin-left: 10;
  margin-bottom: 10;
`;

export const Wrapper = styled.div`
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;
