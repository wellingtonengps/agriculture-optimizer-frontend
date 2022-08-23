import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Result.module.css";

const Result: NextPage = () => {
  return (
    <>
      <Head>
        <title>Result Optimizer</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.body}></div>
      </main>
    </>
  );
};

export default Result;
