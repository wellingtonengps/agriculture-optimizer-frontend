import { IconType } from "react-icons";
import styles from "./Card.module.css";

import { AiOutlinePlus } from "react-icons/ai";

type CardProps = {
  text: String | undefined;
  icon?: IconType;
  onClick: () => void;
  color?: string;
  title?: string;
};

const Card = (props: CardProps) => {
  return (
    <div
      className={styles.containerActive}
      style={{ backgroundColor: props.color }}
      onClick={() => props.onClick()}
    >
      {props.icon ? (
        <props.icon size={30} style={{ marginBottom: 10 }} />
      ) : (
        <AiOutlinePlus size={30} />
      )}
      {props.text ? <span>{props.text}</span> : null}
    </div>
  );
};

export default Card;
