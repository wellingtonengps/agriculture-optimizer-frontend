import React, { ReactNode } from "react";
import styles from "./ModalPlant.module.css";
import { RiCloseLine } from "react-icons/ri";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
  setValue?: (value: string) => void;
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
          <div className={styles.modalContent}>{props.children}</div>
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
