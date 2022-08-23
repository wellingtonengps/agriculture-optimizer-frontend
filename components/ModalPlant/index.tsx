import React, { ReactNode } from "react";
import styles from "./ModalPlant.module.css";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import ItemList from "../ItemList";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  setValue?: (value: string) => void;
  listPlants: cropProps[];
};

const ModalPlant = (props: ModalProps) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Plantas</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => props.setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            {props.listPlants.map((data) => {
              return ItemList(data);
            })}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
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
