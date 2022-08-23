import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { solutionCropProps } from "../../types/types";
import styles from "./SolutionCropItemList.module.css";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type itemListProps = {
  data: solutionCropProps;
};

const SolutionCropItemList = (props: itemListProps) => {
  const [active, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!active);
  }

  return (
    <>
      <div
        key={props.data.id}
        className={styles.itemList}
        onClick={() => handleSetActive()}
      >
        <div className={styles.wrapperFull}>
          <div className={styles.rowItem}>
            <span>{props.data.crop.name}</span>
          </div>
          <div className={styles.rowItem}>
            <AiOutlineArrowUp color="#2FC52C" />
            <span>{props.data.crop.price}</span>
          </div>
          <div className={styles.rowItem}>
            <AiOutlineArrowDown color="#EF1818" />
            <span>{props.data.crop.cost}</span>
          </div>

          <div className={styles.rowItem}>
            <span>{props.data.amount}</span>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};

export default SolutionCropItemList;
