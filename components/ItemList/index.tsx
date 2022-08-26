import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styles from "./ItemList.module.css";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  isActive: boolean;
};

type itemListProps = {
  data: cropProps;
  //syncPlant: (plant: cropProps) => void;
};

const ItemList = (props: itemListProps) => {
  const [isActive, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!isActive);
    props.data.isActive = !props.data.isActive;
  }

  return (
    <div
      className={styles.itemList}
      onClick={handleSetActive}
      style={{
        backgroundColor: `${props.data.isActive ? "#f0f5d1" : "#f1f1f1"}`,
      }}
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
