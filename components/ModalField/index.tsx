import React, { ReactNode, useState } from "react";
import styles from "./ModalField.module.css";
import { RiCloseLine } from "react-icons/ri";

type fieldProps = {
  name: string;
  area: string;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  setValue?: (value: string) => void;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  syncData: ({ name, area }: fieldProps) => void;
};

const ModalField = (props: ModalProps) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  console.log(name, area);

  function handleField() {
    props.setArea(area);
    props.setName(name);
    props.syncData({ name, area });
    props.setIsOpen(false);
  }

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
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => props.setIsOpen(false)}
              >
                Delete
              </button>
              <button className={styles.addBtn} onClick={handleField}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalField;
