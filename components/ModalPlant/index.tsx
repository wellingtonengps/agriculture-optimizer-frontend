import React, { useState } from "react";
import styles from "./ModalPlant.module.css";
import { RiCloseLine } from "react-icons/ri";
import ItemList from "../ItemList";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  isActive: boolean;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  syncPlant: () => void;
  listPlants: cropProps[];
};

const ModalPlant = (props: ModalProps) => {
  function handleSync() {
    props.syncPlant();
    props.setIsOpen(false);
  }

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
            {props.listPlants.map((data) => (
              <ItemList key={data.id} data={data} />
            ))}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={handleSync}>
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
