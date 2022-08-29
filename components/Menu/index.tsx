import Link from "next/link";
import React from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaSave, FaSeedling } from "react-icons/fa";

import { Container, WrapperButton } from "./styles";

const Menu = () => {
  return (
    <Container>
      <WrapperButton>
        <Link href="/">
          <a>
            <FaSeedling style={{ fontSize: 25 }} />
            <span>Criar</span>
          </a>
        </Link>
        <Link href="/result">
          <a>
            <BsFillBarChartLineFill style={{ fontSize: 25 }} />
            <span>Otimizar</span>
          </a>
        </Link>
        <Link href="/save">
          <a>
            <FaSave style={{ fontSize: 25 }} />
            <span>Salvar</span>
          </a>
        </Link>
      </WrapperButton>
    </Container>
  );
};

export default Menu;
