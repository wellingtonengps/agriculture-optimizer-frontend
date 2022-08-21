import { ReactNode, useState } from "react";
import { IconBase, IconType } from "react-icons";
import styles from "./CardField.module.css";
import { AiOutlinePlus } from "react-icons/ai";

type CardFieldProps = {
  title: string;
  onClick?: () => void;
  icon?: IconType;
};

const CardField = (props: CardFieldProps) => {
  const [click, isClick] = useState(true);

  if (click) {
    return (
      <div className={styles.container}>
        {props.icon ? <props.icon /> : <AiOutlinePlus />}
      </div>
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

export default CardField;
