import styles from "./CardList.module.css";

import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlinePlus,
} from "react-icons/ai";

type CardListProps = {
  onClick?: () => void;
  onChangeModal: () => void;
  type: "empty" | "full";
  name?: string;
  cost?: number;
  value?: number;
};

const CardList = (props: CardListProps) => {
  return (
    <div className={styles.container} onClick={() => props.onChangeModal()}>
      {props.type == "full" ? (
        <>
          <span>{props.name}</span>
          <div className={styles.wrapperFull}>
            <div className={styles.input}>
              <AiOutlineArrowUp color="#2FC52C" />
              <span>{props.value}</span>
            </div>
            <div className={styles.output}>
              <AiOutlineArrowDown color="#EF1818" />
              <span>{props.cost}</span>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.wrapperEmpty}>
          <AiOutlinePlus />
        </div>
      )}
    </div>
  );
};

export default CardList;
