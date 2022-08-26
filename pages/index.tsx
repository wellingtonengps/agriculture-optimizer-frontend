import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
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
import { AiOutlinePlus } from "react-icons/ai";

type fieldProps = {
  id: number;
  name: string;
  area: number;
};

export type cropProps = {
  id: number;
  name: string;
  price: number;
  cost: number;
  space: number;
  isActive: boolean;
};

type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: cropProps[];
};

const Home: NextPage = () => {
  const [isOpenModalInvestimento, setIsOpenModalInvestimento] = useState(false);
  const [isOpenModalField, setIsOpenModalField] = useState(false);
  const [isOpenModalPlants, setIsOpenModalPlants] = useState(false);
  const [crops, setCrops] = useState<cropProps[]>();
  const router = useRouter();
  const [projectName, setProjectName] = useState("");

  const [data, setData] = useState<dataProps>({
    fields: [],
    investiment: null,
    plants: [],
  } as dataProps);

  useEffect(() => {
    fetchCrops().then((data) => {
      setCrops(data);
    });
  }, []);

  function handleRemoveField(id: number) {
    const indexOfObject = data.fields.findIndex((object) => {
      return object.id === id;
    });

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: data.fields.splice(indexOfObject, 1),
      plants: [...prevData.plants],
    }));
  }

  function handleOptimizeClick() {
    const inputData: inputDataProps = {
      budget: data.investiment!,
      space: 0,
      id: null,
      selectedCrops: data.plants,
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

  function syncPlant() {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
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
          syncPlant={syncPlant}
        />
      )}

      <div className={styles.body}>
        <div className={styles.optionSection}>
          <h1>Agriculture-Optimizer</h1>
          <span>
            Helping you to make the right decision and seed your plants
          </span>
          <h2>Model name</h2>
          <input
            className={styles.input}
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
          />
          <h2>Investiment</h2>
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
            {data.fields.map((data, index) => {
              return (
                <CardField
                  index={index}
                  key={index}
                  area={data.area}
                  name={data.name}
                  removePlant={handleRemoveField}
                />
              );
            })}
            <button className={styles.buttonField} onClick={onChangeModalField}>
              <AiOutlinePlus size={25} />
            </button>
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
        <Button title="Otimizar" onClick={handleOptimizeClick} />
      </div>
    </>
  );
};

export default Home;
