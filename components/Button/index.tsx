import { IconType } from "react-icons";
import styles from "./Button.module.css";
import { Container } from "./styles";

type ButtonProps = {
  title: String;
  icon?: IconType;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  return <Container onClick={props.onClick}>{props.title}</Container>;
};

export default Button;
