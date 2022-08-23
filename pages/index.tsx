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

type fieldProps = {
  name: string;
  area: string;
};

type plantProps = {
  name: string;
  value: number;
  cost: number;
};

type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: plantProps[];
};

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
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

  const [data, setData] = useState<dataProps>({
    fields: [],
    investiment: null,
    plants: [],
  } as dataProps);

  useEffect(() => {
    fetchCrops().then((data) => {
      setCrops(data);
      console.log(data);
    });
  }, []);

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

  function syncPlants(newPlant: plantProps) {
    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: [...prevData.plants, newPlant],
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
        <title>Create Farm</title>
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
        <ModalPlant setIsOpen={setIsOpenModalPlants} listPlants={crops!} />
      )}

      <div className={styles.body}>
        <div className={styles.optionSection}>
          <h1>Agriculture-Optimizer</h1>
          <div className={styles.wrapperRow}>
            <Card
              investiment={data.investiment}
              onChangeModal={onChangeModalInvestimento}
              icon={BsCurrencyDollar}
            />
          </div>
        </div>
        <div className={styles.areaSection}>
          <h2>Manage your fields</h2>
          <div className={styles.wrapperRow}>
            {data.fields.map((data) => {
              return (
                <CardField
                  key={data.name}
                  type="full"
                  area={data.area}
                  name={data.name}
                  onChangeModal={onChangeModalField}
                />
              );
            })}
            <CardField type="empty" onChangeModal={onChangeModalField} />
          </div>
        </div>
        <div className={styles.plantSection}>
          <h2>Manage your plants</h2>
          <div className={styles.wrapperColumn}>
            <CardList type="empty" onChangeModal={onChangeModalPlants} />
          </div>
        </div>
        <button className={styles.button} onClick={() => {}}>
          Otimizar
        </button>
      </div>
    </>
  );
};

export default Home;
