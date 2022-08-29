import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 64px;
  margin-left: 115px;
`;

export const Section = styled.div`
  h1 {
    margin-bottom: 5px;
  }

  h2 {
    margin-bottom: 5px;
  }
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

export const ButtonField = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebc7a8;
  border-radius: 40px;
  height: 134px;
  width: 190px;
  color: #333;
`;

export const ButtonCrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbf2c2;
  border-radius: 15px;
  height: 63px;
  width: 750px;

  font-size: 25px;
`;
