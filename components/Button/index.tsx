import { IconType } from "react-icons";
import styles from "./Button.module.css";

import { AiOutlinePlus } from "react-icons/ai";

type ButtonProps = {
  title: String;
  icon?: IconType;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
