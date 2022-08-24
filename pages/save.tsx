import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Save.module.css";

const Save: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agriculture | Save Optimizer</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.body}></div>
      </main>
    </>
  );
};

export default Save;
