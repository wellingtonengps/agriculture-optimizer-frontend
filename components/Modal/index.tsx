import React, { useState } from "react";
import styles from "./ModalInvestimento.module.css";
import { RiCloseLine } from "react-icons/ri";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  syncData: (data: string) => void;
  title: string;
  inputName: string;
};

const Modal = (props: ModalProps) => {
  const [data, setData] = useState("");

  function handleValue() {
    props.syncData(data);
    props.setIsOpen(false);
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{props.title}</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => props.setIsOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <span>{props.inputName}</span>
            <input
              className={styles.input}
              value={data!}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={handleValue}>
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
