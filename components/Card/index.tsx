import { IconType } from "react-icons";
import styles from "./Card.module.css";

import { AiOutlinePlus } from "react-icons/ai";

type CardProps = {
  text: String | undefined;
  icon?: IconType;
  onClick: () => void;
};

const Card = (props: CardProps) => {
  return (
    <div className={styles.containerActive} onClick={() => props.onClick()}>
      {props.icon ? <props.icon size={30} /> : <AiOutlinePlus size={30} />}
      {props.text ? <span>{props.text}</span> : null}
    </div>
  );
};

export default Card;
