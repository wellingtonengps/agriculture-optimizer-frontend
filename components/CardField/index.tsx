import { IconType } from "react-icons";
import styles from "./CardField.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

type CardFieldProps = {
  onClick?: () => void;
  icon?: IconType;
  onChangeModal?: () => void;
  removePlant: (index: number) => void;
  area: number;
  name: string;
  index: number;
};

const CardField = (props: CardFieldProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.closeBtn}
        onClick={() => props.removePlant(props.index)}
      >
        <RiCloseLine style={{ marginBottom: "-3px" }} />
      </button>
      <span style={{ fontSize: 28 }}>{props.name}</span>
      <span style={{ fontSize: 20 }}>{props.area}</span>
    </div>
  );
};

export default CardField;
