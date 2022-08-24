import { IconType } from "react-icons";
import styles from "./CardField.module.css";
import { AiOutlinePlus } from "react-icons/ai";

type CardFieldProps = {
  onClick?: () => void;
  icon?: IconType;
  onChangeModal?: () => void;
  area?: string;
  name?: string;
  type: "empty" | "full";
};

const CardField = (props: CardFieldProps) => {
  return (
    <div className={styles.container} onClick={props.onChangeModal}>
      {props.type == "full" ? (
        <>
          <span style={{ fontSize: 28 }}>{props.name}</span>
          <span style={{ fontSize: 20 }}>{props.area}</span>
        </>
      ) : (
        <AiOutlinePlus size={25} />
      )}
    </div>
  );
};

export default CardField;
