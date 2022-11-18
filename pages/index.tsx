import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Card,
  CardField,
  CardList,
  ModalField,
  Modal,
  ModalPlant,
} from "../components";
import styles from "../styles/Home.module.css";

import { BsCurrencyDollar, BsFillCalendarRangeFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { fetchCrops, fetchSolutions, postUserInput } from "./api/api";
import { inputDataProps, fieldProps, cropProps } from "../types/types";

import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";

type dataProps = {
  investiment: number | null;
  fields: fieldProps[];
  plants: cropProps[];
  timeFrames: number | null;
  modelName: string;
};

const Home: NextPage = () => {
  const [isOpenModalInvestimento, setIsOpenModalInvestimento] = useState(false);
  const [isOpenModalField, setIsOpenModalField] = useState(false);
  const [isOpenModalPlants, setIsOpenModalPlants] = useState(false);
  const [isOpenModalModelName, setIsOpenModalModelName] = useState(false);
  const [isOpenModalModelTimeFrames, setIsOpenModalTimeFrames] =
    useState(false);
  const [crops, setCrops] = useState<cropProps[]>();

  const router = useRouter();

  const [data, setData] = useState<dataProps>({
    fields: [],
    investiment: null,
    plants: [],
    timeFrames: null,
    modelName: "",
  } as dataProps);

  console.log(data);

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
      timeFrames: null,
      modelName: "",
    }));
  }

  function handleOptimizeClick() {
    const inputData: inputDataProps = {
      budget: data.investiment!,
      space: 0,
      id: null,
      selectedCrops: data.plants,
      fields: data.fields,
      timeFrames: data.timeFrames!,
    };
    postUserInput(inputData)
      .then((res) => {
        router.push({
          pathname: "result",
          query: {
            id: res.id,
          },
        });
      })
      .catch(() => alert("erro"));
  }

  function syncFields(newData: fieldProps) {
    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields, newData],
      plants: [...prevData.plants],
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncInvestiment(newInvestiment: string) {
    setData((prevData) => ({
      investiment: parseInt(newInvestiment),
      fields: [...prevData.fields],
      plants: [...prevData.plants],
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncPlant() {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: prevData.timeFrames,
      modelName: "",
    }));
  }

  function syncTimesFrame(newTime: string) {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: parseInt(newTime),
      modelName: prevData.modelName,
    }));
  }

  function syncModelName(newNameModel: string) {
    const plantsActive = crops?.filter((item: cropProps) => item.isActive);

    setData((prevData) => ({
      investiment: prevData.investiment,
      fields: [...prevData.fields],
      plants: plantsActive!,
      timeFrames: prevData.timeFrames,
      modelName: newNameModel,
    }));
  }

  console.log(data);

  function onChangeModelName() {
    setIsOpenModalModelName(!isOpenModalModelName);
  }

  function onChangeModalInvestiment() {
    setIsOpenModalInvestimento(!isOpenModalInvestimento);
  }

  function onChangeModalTimeFrames() {
    setIsOpenModalTimeFrames(!isOpenModalModelTimeFrames);
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
      {isOpenModalModelName && (
        <Modal
          title="Modelo"
          inputName="Nome"
          setIsOpen={setIsOpenModalModelName}
          syncData={syncModelName}
        />
      )}
      {isOpenModalInvestimento && (
        <Modal
          title="Investimento"
          inputName="Valor"
          setIsOpen={setIsOpenModalInvestimento}
          syncData={syncInvestiment}
        />
      )}

      {isOpenModalModelTimeFrames && (
        <Modal
          title="Planejamento"
          inputName="Tempo"
          setIsOpen={setIsOpenModalTimeFrames}
          syncData={syncTimesFrame}
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

          <div className={styles.wrapperRow}>
            <Card
              title="Nome do modelo"
              text={data.modelName}
              onClick={onChangeModelName}
              icon={MdOutlineDriveFileRenameOutline}
              color="#d1eff5"
            />
            <Card
              title="Valor do inverstimento"
              text={data.investiment?.toFixed(2).toString()}
              onClick={onChangeModalInvestiment}
              icon={BsCurrencyDollar}
              color="#f0f5d1"
            />
            <Card
              title="Tempo de planejamento"
              text={data.timeFrames?.toString()}
              onClick={onChangeModalTimeFrames}
              icon={BsFillCalendarRangeFill}
              color="#d1eedb"
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
                  area={data.size}
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
