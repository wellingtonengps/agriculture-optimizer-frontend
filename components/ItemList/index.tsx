import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styles from "./ItemList.module.css";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  active: boolean;
};

type itemListProps = {
  data: cropProps;
  handleSetSelection: (data: cropProps, isActive: boolean) => void;
};

const ItemList = (props: itemListProps) => {
  const [isActive, setActive] = useState(false);

  function handleSetActive() {
    setActive(!isActive);
    props.handleSetSelection(props.data, isActive);
  }

  return (
    <div
      className={styles.itemList}
      onClick={handleSetActive}
      style={{ backgroundColor: `${isActive ? "#f0f5d1" : "#f1f1f1"}` }}
    >
      <span>{props.data.name}</span>
      <div className={styles.wrapperFull}>
        <div className={styles.input}>
          <AiOutlineArrowUp color="#2FC52C" />
          <span>{props.data.price}</span>
        </div>
        <div className={styles.output}>
          <AiOutlineArrowDown color="#EF1818" />
          <span>{props.data.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
