import { useState } from "react";
import { IconType } from "react-icons";
import styles from "./CardField.module.css";
import { AiOutlinePlus } from "react-icons/ai";

type CardFieldProps = {
  onClick?: () => void;
  icon?: IconType;
  onChangeModal: () => void;
  valueArea: string;
  valueName: string;
};

const CardField = (props: CardFieldProps) => {
  const [active, isActive] = useState(true);

  return (
    <div
      className={styles.containerActive}
      onClick={() => props.onChangeModal()}
    >
      {active ? (
        <>
          <span style={{ fontSize: 28 }}>{props.valueName}</span>
          <span style={{ fontSize: 20 }}>{props.valueArea}</span>
        </>
      ) : (
        <AiOutlinePlus size={25} />
      )}
    </div>
  );
};

export default CardField;
