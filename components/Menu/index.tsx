import Link from "next/link";
import React from "react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FaSave, FaSeedling } from "react-icons/fa";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.wrapperButton}>
          <Link href="/">
            <a>
              <FaSeedling style={{ fontSize: 25 }} />
              <span>Criar</span>
            </a>
          </Link>
          <Link href="/result">
            <a>
              <BsFileEarmarkBarGraph style={{ fontSize: 25 }} />
              <span>Otimizar</span>
            </a>
          </Link>
          <Link href="/save">
            <a>
              <FaSave style={{ fontSize: 25 }} />
              <span>Salvar</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
