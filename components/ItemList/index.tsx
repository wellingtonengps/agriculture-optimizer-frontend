import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styles from "./ItemList.module.css";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

const ItemList = (data: cropProps) => {
  const [active, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!active);
  }

  return (
    <div
      key={data.id}
      className={styles.itemList}
      onClick={() => handleSetActive()}
    >
      <span>{data.name}</span>
      <div className={styles.wrapperFull}>
        <div className={styles.input}>
          <AiOutlineArrowUp color="#2FC52C" />
          <span>{data.price}</span>
        </div>
        <div className={styles.output}>
          <AiOutlineArrowDown color="#EF1818" />
          <span>{data.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
