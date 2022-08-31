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
import { Container, WrapperGrid } from "../styles/resultstyles";

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

      <Container>
        <h2>Solução {solution?.id}</h2>

        <h2>Culturas</h2>
        <WrapperGrid>
          {itemMatrix.map((line: Array<solutionCropProps>) => (
            <div
              key={0}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h3>Planejamento ótimo</h3>
              {line.map((el: solutionCropProps) =>
                el ? (
                  <CardResult key={el.id} data={el} />
                ) : (
                  <CardResult data={el} />
                )
              )}
            </div>
          ))}
        </WrapperGrid>

        <div style={{ marginBottom: 10 }}>
          {solution?.solutionCrops.map((item) => {
            return <SolutionCropItemList key={item.id} data={item} />;
          })}
        </div>

        <Button title="Salvar" onClick={() => {}} />
      </Container>
    </>
  ) : (
    <></>
  );
};

export default Result;
