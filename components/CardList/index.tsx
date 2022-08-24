import styles from "./CardList.module.css";

import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlinePlus,
} from "react-icons/ai";

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type CardListProps = {
  onClick?: () => void;
  onChangeModal?: () => void;
  type: "empty" | "full";
  data?: cropProps;
};

const CardList = (props: CardListProps) => {
  return (
    <div className={styles.container} onClick={props.onChangeModal!}>
      {props.type == "full" ? (
        <>
          <span>{props.data?.name}</span>
          <div className={styles.wrapperFull}>
            <div className={styles.input}>
              <AiOutlineArrowUp color="#2FC52C" />
              <span>{props.data?.price}</span>
            </div>
            <div className={styles.output}>
              <AiOutlineArrowDown color="#EF1818" />
              <span>{props.data?.cost}</span>
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
