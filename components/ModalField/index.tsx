import React, { useState } from "react";
import styles from "./ModalField.module.css";
import { RiCloseLine } from "react-icons/ri";

type fieldProps = {
  name: string;
  area: string;
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  syncDataField: ({ name, area }: fieldProps) => void;
};

const ModalField = (props: ModalProps) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  function handleField() {
    props.syncDataField({ name: name, area: area });
    props.setIsOpen(false);
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Área</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => props.setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <span>Nome:</span>
            <input
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <span>Tamanho:</span>
            <input
              className={styles.input}
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
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
