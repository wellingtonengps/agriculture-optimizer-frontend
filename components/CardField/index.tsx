import { ReactNode, useState } from "react";
import { IconBase, IconType } from "react-icons";
import styles from "./CardField.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../Modal";

type CardFieldProps = {
  title: string;
  onClick?: () => void;
  icon?: IconType;
};

const CardField = (props: CardFieldProps) => {
  const [active, isActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  if (active) {
    return (
      <>
        {isOpen && (
          <Modal setIsOpen={setIsOpen} title="Valor de Investimento">
            <input
              value={value}
              onChange={(value) => setValue(value.target.value)}
            />
          </Modal>
        )}
        <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
          {props.icon ? <props.icon size={25} /> : <AiOutlinePlus size={25} />}
        </div>
      </>
    );
  }

  return (
    <div className={styles.containerActive} onClick={() => setIsOpen(!isOpen)}>
      <>
        {isOpen && <Modal setIsOpen={setIsOpen} type="Field" />}
        <span style={{ fontSize: 28 }}>Field 1</span>
        <span style={{ fontSize: 20 }}>30m²</span>
      </>
    </div>
  );
};

export default CardField;
