import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Result.module.css";
import { solutionProps,solutionCropProps, cropProps } from "../types/types";
import {fetchSolution} from "./api/api"
import SolutionCropItemList from "../components/SolutionCropItemList";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";


const Result: NextPage = () => {
  const [solution, setSolution] = useState<solutionProps>()

  useEffect(()=>{
    fetchSolution(6).then((data)=>{setSolution(data); console.log(data)})
  }, [])

  return (
    <>
      <Head>
        <title>Result Optimizer</title>
      </Head>
      <main className={styles.main}>
      
        <div className={styles.body}>
        <h2>Solução {solution?.id}</h2>
          {solution?.solutionCrops.map((item)=> {return <SolutionCropItemList data={item}/>})}
        </div>
      </main>
    </>
  );
};

export default Result;
/*
type itemListProps={
  data: cropProps
}

const ItemList = (props: itemListProps) => {
  const [active, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!active);
  }

  return (
    <div
      key={props.data.id}
      className={styles.itemList}
      onClick={() => handleSetActive()}
    >
      <span>{props.data.name}</span>
      <div className={styles.wrapperFull}>
        <div className={styles.input}>
          <AiOutlineArrowUp color="#2FC52C" />
          <span>{props.data.price}</span>
        </div>
        <div className={styles.output}>
          <AiOutlineArrowDown color="#EF1818" />
          <span>{props.data.cost}</span>
        </div>
      </div>
    </div>
  );
};
*/