import { IconType } from "react-icons";
import styles from "./Card.module.css";

import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Modal from "../Modal";

type CardProps = {
  title: string;
  icon?: IconType;
};

const Card = (props: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  if (value) {
    return (
      <>
        {isOpen && <Modal setIsOpen={setIsOpen} type="Investimento" />}
        <div
          className={styles.containerActive}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.icon ? <props.icon size={30} /> : <AiOutlinePlus size={30} />}
          <span>R$ {value}</span>
        </div>
      </>
    );
  }

  return (
    <>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} type="Investimento">
          <input
            value={value}
            onChange={(value) => setValue(value.target.value)}
          />
        </Modal>
      )}
      <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        {props.icon ? <props.icon size={30} /> : <AiOutlinePlus size={30} />}
      </div>
    </>
  );
};

export default Card;
