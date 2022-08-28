import { IconType } from "react-icons";

import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./styles";

type CardProps = {
  text: String | undefined;
  icon?: IconType;
  onClick: () => void;
  color: string;
  title: string;
};

const Card = (props: CardProps) => {
  return (
    <Container color={props.color} onClick={props.onClick}>
      {props.icon ? (
        <props.icon size={30} style={{ margin: 0 }} />
      ) : (
        <AiOutlinePlus size={30} />
      )}
      {props.text ? <span>{props.text}</span> : null}
    </Container>
  );
};

export default Card;
