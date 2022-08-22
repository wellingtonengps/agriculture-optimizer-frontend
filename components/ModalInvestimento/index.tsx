import React, { ReactNode, useState } from "react";
import styles from "./ModalInvestimento.module.css";
import { RiCloseLine } from "react-icons/ri";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  syncInvestiment: (investimento: number) => void;
};

const ModalInvestimento = (props: ModalProps) => {
  const [valueInvestiment, setValueInvestiment] = useState("");

  function handleValue() {
    props.syncInvestiment(parseInt(valueInvestiment));
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
              value={valueInvestiment!}
              onChange={(event) => setValueInvestiment(event.target.value)}
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

export default ModalInvestimento;
