import React from "react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FaSave, FaSeedling } from "react-icons/fa";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.wrapperButton}>
          <button>
            <FaSeedling style={{ fontSize: 25 }} />
            <span>Criar</span>
          </button>
          <button>
            <BsFileEarmarkBarGraph style={{ fontSize: 25 }} />
            <span>Otimizar</span>
          </button>
          <button>
            <FaSave style={{ fontSize: 25 }} />
            <span>Salvar</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
