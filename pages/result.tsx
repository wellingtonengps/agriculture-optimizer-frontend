import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, CardResult } from "../components";
import {
  Container,
  WrapperColumn,
  WrapperGrid,
  WrapperLoading,
} from "../styles/resultstyles";

type cropTypes = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  profit: number;
  time: number;
};

type fieldTypes = {
  id: number;
  size: number;
  name: string;
};

type solutionCropTypes = {
  id: number;
  amount: number;
  crop: cropTypes;
  price: number;
  cost: number;
  space: number;
  time: number;
  field: fieldTypes;
  timeFrame: number;
};

type inputDataTypes = {
  id: number;
  budget: number;
  space: number;
  timeFrames: number;
};

export type dataTypes = {
  id: number;
  solutionCrops: solutionCropTypes[];
  inputData: inputDataTypes;
  fields: fieldTypes[];
};

const data: dataTypes = {
  id: 61,
  solutionCrops: [
    {
      id: 408,
      amount: 0,
      crop: {
        id: 3,
        name: "repolho",
        price: 1.5,
        cost: 1.0,
        space: 0.3,
        time: 1.0,
        profit: 0.5,
      },
      price: 1.5,
      space: 0.3,
      time: 1.0,
      cost: 1.0,
      field: {
        id: 32,
        size: 10.0,
        name: "Campo1",
      },
      timeFrame: 0,
    },
    {
      id: 409,
      amount: 0,
      crop: {
        id: 3,
        name: "repolho",
        price: 1.5,
        cost: 1.0,
        space: 0.3,
        time: 1.0,
        profit: 0.5,
      },
      price: 1.5,
      space: 0.3,
      time: 1.0,
      cost: 1.0,
      field: {
        id: 33,
        size: 10.0,
        name: "Campo2",
      },
      timeFrame: 0,
    },
    {
      id: 410,
      amount: 0,
      crop: {
        id: 3,
        name: "repolho",
        price: 1.5,
        cost: 1.0,
        space: 0.3,
        time: 1.0,
        profit: 0.5,
      },
      price: 1.5,
      space: 0.3,
      time: 1.0,
      cost: 1.0,
      field: {
        id: 34,
        size: 10.0,
        name: "Campo3",
      },
      timeFrame: 0,
    },
    {
      id: 411,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 32,
        size: 10.0,
        name: "Campo1",
      },
      timeFrame: 1,
    },
    {
      id: 412,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 33,
        size: 10.0,
        name: "Campo2",
      },
      timeFrame: 1,
    },
    {
      id: 413,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 34,
        size: 10.0,
        name: "Campo3",
      },
      timeFrame: 1,
    },
    {
      id: 414,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 32,
        size: 10.0,
        name: "Campo1",
      },
      timeFrame: 2,
    },
    {
      id: 415,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 33,
        size: 10.0,
        name: "Campo2",
      },
      timeFrame: 2,
    },
    {
      id: 416,
      amount: 0,
      crop: {
        id: 2,
        name: "couve",
        price: 10.0,
        cost: 5.0,
        space: 0.2,
        time: 2.0,
        profit: 5.0,
      },
      price: 10.0,
      space: 0.2,
      time: 2.0,
      cost: 5.0,
      field: {
        id: 34,
        size: 10.0,
        name: "Campo3",
      },
      timeFrame: 2,
    },
  ],
  inputData: {
    id: 61,
    budget: 20000.0,
    space: 500.0,
    timeFrames: 0,
  },
  fields: [
    {
      id: 32,
      size: 10.0,
      name: "Campo1",
    },
    {
      id: 33,
      size: 10.0,
      name: "Campo2",
    },
    {
      id: 34,
      size: 10.0,
      name: "Campo3",
    },
  ],
};

const Result: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return !loading ? (
    <>
      <Head>
        <title>Agriculture | Result Optimizer</title>
      </Head>

      <Container>
        <h2>Solução {data.id}</h2>
        <WrapperGrid>
          {data.solutionCrops.map((value) => {
            return <CardResult key={value.crop.id} data={value} />;
          })}
        </WrapperGrid>
        <WrapperColumn></WrapperColumn>
        <h2>Culturas</h2>

        <Button title="Salvar" onClick={() => {}} />
      </Container>
    </>
  ) : (
    <WrapperLoading>
      <iframe src="https://embed.lottiefiles.com/animation/107999" />
    </WrapperLoading>
  );
};

export default Result;
