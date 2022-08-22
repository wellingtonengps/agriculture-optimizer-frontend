import React, { ReactNode } from "react";
import styles from "./ModalPlant.module.css";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

type plantProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  setValue?: (value: string) => void;
  listPlants: plantProps[];
};

const ModalPlant = (props: ModalProps) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Investimento</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => props.setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {props.listPlants.map((data) => {
              return (
                <div key={data.name} className={styles.itemList}>
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
            })}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => props.setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.addBtn}
                onClick={() => props.setIsOpen(false)}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPlant;
