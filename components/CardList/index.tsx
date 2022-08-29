import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Container, Input, Output, Wrapper } from "./styles";

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type CardListProps = {
  onClick?: () => void;
  onChangeModal?: () => void;
  data?: cropProps;
};

const CardList = (props: CardListProps) => {
  return (
    <Container onClick={props.onChangeModal!}>
      <span>{props.data?.name}</span>
      <Wrapper>
        <Input>
          <AiOutlineArrowUp color="#2FC52C" />
          <span>{props.data?.price}</span>
        </Input>
        <Output>
          <AiOutlineArrowDown color="#EF1818" />
          <span>{props.data?.cost}</span>
        </Output>
      </Wrapper>
    </Container>
  );
};

export default CardList;
