import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Result.module.css";
import { solutionProps, fieldProps, solutionCropProps } from "../types/types";
import { fetchSolution } from "./api/api";
import SolutionCropItemList from "../components/SolutionCropItemList";
import { Button, Card, CardResult } from "../components";
import { BsCurrencyDollar } from "react-icons/bs";
import { useRouter } from "next/router";
import jsPDF from "jspdf";
import { fileURLToPath } from "url";

("jspdf");

const Result: NextPage = () => {
  const [solution, setSolution] = useState<solutionProps>({} as solutionProps);
  const router = useRouter();
  const query = router.query;
  const [itemMatrix, setItemMatrix] = useState<Array<Array<solutionCropProps>>>(
    new Array<Array<solutionCropProps>>()
  );

  const [loading, setLoading] = useState(true);

  function createMatrix(data: any) {
    var matrix = new Array(data.fields.length);

    for (let i = 0; i < data.fields.length; i++) {
      matrix[i] = new Array(data.inputData.timeFrames).fill(null);
    }

    for (let i = 0; i < data.solutionCrops.length; i++) {
      const solutionCrop = data.solutionCrops[i];

      const timeFrame = solutionCrop.timeFrame;
      const fieldIndex = find(solutionCrop.field.id, data.fields);
      matrix[timeFrame][fieldIndex] = solutionCrop;
      console.log(solutionCrop);
      console.log(`${timeFrame}x${fieldIndex}`);
      console.log(i);
    }

    return matrix;
  }

  function find(id: number, fields: fieldProps[]) {
    return fields.findIndex((field) => field.id === id);
  }

  function handleGeneratePdf() {
    const modelName = "Teste";

    var doc = new jsPDF("p", "pt", "a4", true);
  }

  useEffect(() => {
    setLoading(true);
    fetchSolution(parseInt(query.id as string)).then((fetchedData) => {
      setSolution(fetchedData);
      console.log(fetchedData);
      setItemMatrix(createMatrix(fetchedData));
      setLoading(false);
    });
  }, [query.id]);

  return !loading ? (
    <>
      <Head>
        <title>Agriculture | Result Optimizer</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.body}>
          <h2>Solução {solution?.id}</h2>
          <div className={styles.wrapperRow}>
            <Card
              color="#009"
              title="budget"
              text={solution?.inputData.budget?.toFixed(2).toString()}
              onClick={() => {}}
              icon={BsCurrencyDollar}
            />
          </div>
          <h2>Culturas</h2>
          <div className={styles.wrapperGrid}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 20,
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {itemMatrix.map((line: Array<solutionCropProps>) => (
                <div
                  key={0}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h3>Campo</h3>
                  {line.map((el: solutionCropProps) =>
                    el ? (
                      <CardResult key={el.id} data={el} type="full" />
                    ) : (
                      <CardResult data={el} type="empty" />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            {solution?.solutionCrops.map((item) => {
              return <SolutionCropItemList key={item.id} data={item} />;
            })}
          </div>

          <Button title="Salvar" onClick={handleGeneratePdf} />
        </div>
      </main>
    </>
  ) : (
    <></>
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
