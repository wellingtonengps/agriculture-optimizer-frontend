import { ReactNode, useState } from "react";
import { IconBase, IconType } from "react-icons";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  onClick?: () => void;
  icon: IconType;
};

const Card = (props: CardProps) => {
  const [click, isClick] = useState(true);

  if (click) {
    return (
      <button onClick={props.onClick}>
        <div className={styles.container}>
          <props.icon />
        </div>
      </button>
    );
  }

  return (
    <button onClick={props.onClick}>
      <div className={styles.container}>
        <h1>{props.title}</h1>
      </div>
    </button>
  );
};

export default Card;
