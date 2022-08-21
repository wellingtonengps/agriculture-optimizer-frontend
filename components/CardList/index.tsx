import { ReactNode, useState } from "react";
import { IconBase, IconType } from "react-icons";
import styles from "./CardList.module.css";

import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlinePlus,
} from "react-icons/ai";

type CardListProps = {
  title: string;
  onClick?: () => void;
};

const CardList = (props: CardListProps) => {
  const [click, isClick] = useState(false);

  if (click) {
    return (
      <div className={styles.container}>
        <AiOutlinePlus />
      </div>
    );
  }

  return (
    <div className={styles.container2}>
      <span style={{ fontWeight: "bold" }}>Alface</span>
      <div className={styles.wrapperValues}>
        <div className={styles.input}>
          <AiOutlineArrowUp color="#2FC52C" />
          <span>R$ 20,00</span>
        </div>
        <div className={styles.output}>
          <AiOutlineArrowDown color="#EF1818" />
          <span>R$ 5,00</span>
        </div>
      </div>
    </div>
  );
};

export default CardList;
