import React, { useState } from "react";
import styles from "./ModalPlant.module.css";
import { RiCloseLine } from "react-icons/ri";
import ItemList from "../ItemList";
import { plantProps } from "../../types/types";

type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  syncPlants: (newPlants: cropProps[]) => void;
  listPlants: cropProps[];
};

const ModalPlant = (props: ModalProps) => {
  const [listSelections, setListSelections] = useState([] as cropProps[]);

  function handleSetSelection(data: cropProps, isActive: boolean) {
    if (!isActive) {
      setListSelections((prevData) => [...prevData, data]);
    } else {
      const indexOfObject = listSelections.findIndex((object) => {
        return object.id === data.id;
      });

      listSelections.splice(indexOfObject, 1);
    }
  }

  console.log(listSelections);

  function syncData() {
    props.syncPlants(listSelections);
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
              <ItemList
                key={data.id}
                data={data}
                handleSetSelection={handleSetSelection}
              />
            ))}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={syncData}>
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
