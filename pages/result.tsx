import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Result.module.css";
import { solutionProps } from "../types/types";
import { fetchSolution } from "./api/api";
import SolutionCropItemList from "../components/SolutionCropItemList";
import { Card } from "../components";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiArea } from "react-icons/bi";
import { useRouter } from "next/router";

const Result: NextPage = () => {
  const [solution, setSolution] = useState<solutionProps>();
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    fetchSolution(parseInt(query.id as string)).then((data) => {
      setSolution(data);
      console.log(data);
    });
  }, [query.id]);

  return (
    <>
      <Head>
        <title>Result Optimizer</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.body}>
          <h2>Solução {solution?.id}</h2>
          <div className={styles.wrapperRow}>
            <Card
              text={solution?.inputData.budget?.toFixed(2).toString()}
              onClick={() => {}}
              icon={BsCurrencyDollar}
            />
            <Card
              text={solution?.inputData.space?.toFixed(2).toString()}
              onClick={() => {}}
              icon={BiArea}
            />
          </div>
          <h2>Culturas</h2>
          {solution?.solutionCrops.map((item) => {
            return <SolutionCropItemList key={item.id} data={item} />;
          })}
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
