import { solutionCropProps } from "../../types/types";
import styles from "./CardResult.module.css";

type CardResultProps = {
  data: solutionCropProps;
  type: "full" | "empty";
};

const CardResult = (props: CardResultProps) => {
  if (props.type == "full") {
    return (
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: "#333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#fff" }}>{props.data.crop.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: "#808080",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 10,
        }}
      ></div>
    </div>
  );
};

export default CardResult;
