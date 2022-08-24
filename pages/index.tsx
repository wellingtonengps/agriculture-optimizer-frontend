import type { NextPage } from "next";
import Head from "next/head";
import {
  Card,
  CardField,
  CardList,
  ModalField,
  ModalInvestimento,
  ModalPlant,
} from "../components";
import styles from "../styles/Home.module.css";

import { BsCurrencyDollar } from "react-icons/bs";
import { useState, useEffect } from "react";
import { fetchCrops, fetchSolutions, postUserInput } from "./api/api";
import { inputDataProps } from "../types/types";

import { useRouter } from "next/router";

type fieldProps = {
  name: string;
  area: string;
};

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
};

type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: cropProps[];
};

const listPlants = [
  {
    id: 1,
    name: "alface",
    price: 5.0,
    cost: 2.0,
  },
  {
    id: 2,
    name: "couve",
    price: 10.0,
    cost: 5.0,
  },
  {
    id: 3,
    name: "repolho",
    price: 1.5,
    cost: 1.0,
  },
  {
    id: 4,
    name: "cebola",
    price: 3.0,
    cost: 2.5,
  },
  {
    id: 5,
    name: "abóbora",
    price: 12.0,
    cost: 10.0,
  },
  {
    id: 6,
    name: "brócolis",
    price: 12.0,
    cost: 10.0,
  },
];

const Home: NextPage = () => {
  const [isOpenModalInvestimento, setIsOpenModalInvestimento] = useState(false);
  const [isOpenModalField, setIsOpenModalField] = useState(false);
  const [isOpenModalPlants, setIsOpenModalPlants] = useState(false);
  const [crops, setCrops] = useState<cropProps[]>();
  const router = useRouter();

  const [data, setData] = useState<dataProps>({
    fields: [],
    investiment: null,
    plants: [],
  } as dataProps);

  useEffect(() => {
    fetchCrops().then((data) => {
      setCrops(data);
      //console.log(data);
    });
  }, []);

  function handleOptimizeClick() {
    const inputData: inputDataProps = {
      budget: data.investiment!,
      space: 0,
      id: null,
      selectedCrops: data.plants
    };
    postUserInput(inputData)
      .then((res) => {
        router.push({ pathname: "result", query: { id: res.id } });
      })
      .catch(() => alert("erro"));
  }

  function syncFields(newData: fieldProps) {
    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields, newData],
      plants: [...prevData.plants],
    }));
  }

  function syncInvestiment(newInvestiment: number) {
    setData((prevData) => ({
      investiment: newInvestiment,
      fields: [...prevData.fields],
      plants: [...prevData.plants],
    }));
  }

  function syncPlants(newPlant: cropProps[]) {
    console.log(newPlant);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: newPlant,
    }));
  }

  function onChangeModalInvestimento() {
    setIsOpenModalInvestimento(!isOpenModalInvestimento);
  }

  function onChangeModalField() {
    setIsOpenModalField(!isOpenModalField);
  }

  function onChangeModalPlants() {
    setIsOpenModalPlants(!isOpenModalPlants);
  }

  return (
    <>
      <Head>
        <title>Agriculture | Create Farm</title>
      </Head>

      {isOpenModalInvestimento && (
        <ModalInvestimento
          setIsOpen={setIsOpenModalInvestimento}
          syncInvestiment={syncInvestiment}
        />
      )}
      {isOpenModalField && (
        <ModalField
          setIsOpen={setIsOpenModalField}
          syncDataField={syncFields}
        />
      )}
      {isOpenModalPlants && (
        <ModalPlant
          setIsOpen={setIsOpenModalPlants}
          listPlants={crops!}
          syncPlants={syncPlants}
        />
      )}

      <div className={styles.body}>
        <div className={styles.optionSection}>
          <h1>Agriculture-Optimizer</h1>
          <span>
            Helping you to make the right decision and seed your plants
          </span>
          <div className={styles.wrapperRow}>
            <Card
              text={data.investiment?.toFixed(2).toString()}
              onClick={onChangeModalInvestimento}
              icon={BsCurrencyDollar}
            />
          </div>
        </div>
        <div className={styles.areaSection}>
          <h2>Manage your fields</h2>
          <span>Select an area for sowing</span>
          <div className={styles.wrapperRow}>
            {data.fields.map((data) => {
              return (
                <CardField
                  key={data.name}
                  type="full"
                  area={data.area}
                  name={data.name}
                />
              );
            })}
            <CardField type="empty" onChangeModal={onChangeModalField} />
          </div>
        </div>
        <div className={styles.plantSection}>
          <h2>Manage your plants</h2>
          <span>Select the crops you want to plant</span>
          <div className={styles.wrapperColumn}>
            {data.plants.map((data) => {
              return <CardList key={data.id} type="full" data={data} />;
            })}
            <CardList type="empty" onChangeModal={onChangeModalPlants} />
          </div>
        </div>
        <button className={styles.button} onClick={handleOptimizeClick}>
          Otimizar
        </button>
      </div>
    </>
  );
};

export default Home;
