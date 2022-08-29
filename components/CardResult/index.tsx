import { solutionCropProps } from "../../types/types";
import { Container, Wrapper } from "./styles";

type CardResultProps = {
  data: solutionCropProps;
};

const CardResult = (props: CardResultProps) => {
  return (
    <Container>
      <Wrapper>
        <span style={{ color: "#fff" }}>{props.data.crop.name}</span>
      </Wrapper>
    </Container>
  );
};

export default CardResult;
