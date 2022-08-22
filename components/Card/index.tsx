import { IconType } from "react-icons";
import styles from "./Card.module.css";

import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

type CardProps = {
  investimento: string;
  icon?: IconType;
  onChangeModal: () => void;
};

const Card = (props: CardProps) => {
  const [value, setValue] = useState("");

  return (
    <div
      className={styles.containerActive}
      onClick={() => props.onChangeModal()}
    >
      {props.icon ? <props.icon size={30} /> : <AiOutlinePlus size={30} />}
      {props.investimento ? <span>R$ {props.investimento}</span> : null}
    </div>
  );
};

export default Card;
