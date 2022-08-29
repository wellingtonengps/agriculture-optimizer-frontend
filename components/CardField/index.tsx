import { IconType } from "react-icons";
import { RiCloseLine } from "react-icons/ri";
import { Body, CloseBtn, Container } from "./styles";

type CardFieldProps = {
  onClick?: () => void;
  icon?: IconType;
  onChangeModal?: () => void;
  removePlant: (index: number) => void;
  area: number;
  name: string;
  index: number;
};

const CardField = (props: CardFieldProps) => {
  return (
    <Container>
      <CloseBtn onClick={() => props.removePlant(props.index)}>
        <RiCloseLine style={{ margin: 0 }} />
      </CloseBtn>
      <Body>
        <span style={{ fontSize: 28 }}>{props.name}</span>
        <span style={{ fontSize: 20 }}>{props.area}</span>
      </Body>
    </Container>
  );
};

export default CardField;
