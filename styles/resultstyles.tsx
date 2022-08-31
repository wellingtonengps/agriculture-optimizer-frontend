import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 64px;
  margin-left: 115px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
  margin-top: 30px;

  * {
    margin-right: 25px;
  }
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  margin-top: 30px;

  * {
    margin-bottom: 15px;
  }
`;

export const Button = styled.div`
  height: 60px;
  width: 250px;
  border-radius: 30px;
  border: none;
  background-color: #333333;
  font-size: 25px;
`;

export const WrapperGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 100px;
  margin-top: 40px;
`;

export const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  iframe {
    border: none;
  }
`;
