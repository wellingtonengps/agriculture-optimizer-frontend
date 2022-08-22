import { IconType } from "react-icons";
import styles from "./Card.module.css";

import { AiOutlinePlus } from "react-icons/ai";

type CardProps = {
  investiment: number | null;
  icon?: IconType;
  onChangeModal: () => void;
};

const Card = (props: CardProps) => {
  return (
    <div
      className={styles.containerActive}
      onClick={() => props.onChangeModal()}
    >
      {props.icon ? <props.icon size={30} /> : <AiOutlinePlus size={30} />}
      {props.investiment ? <span>R$ {props.investiment}</span> : null}
    </div>
  );
};

export default Card;
