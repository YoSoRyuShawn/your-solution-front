import Head from "next/head";
import Title from "../components/Title";
import Filter from "../components/Filter";
import DoctorsList from "../components/DoctorsList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { getAlldoctors } from "../utils/data";

export async function getServerSideProps() {
  console.log("fetching");
  const data = await getAlldoctors();
  console.log(data);
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const [doctors, setDocters] = useState(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title />
        <Filter />
        <DoctorsList doctors={doctors} setDocters={setDocters} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
