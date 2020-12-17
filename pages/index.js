import Head from "next/head";
import Title from "../components/Title";
import Filter from "../components/Filter";
import DoctorsList from "../components/DoctorsList";
import Detail from "../components/Detail";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { getAlldoctors } from "../utils/data";

export async function getServerSideProps() {
  console.log("fetching");
  const data = await getAlldoctors();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const [doctors, setDocters] = useState(data);
  const [changeView, setChangeView] = useState(true);
  const [doctorIndex, setIndex] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Hey, Doc!</title>
        <link rel="icon" href="/favicon-heart.ico" />
      </Head>
      <main className={styles.main}>
        <Title doctors={data} setDoctors={setDocters} setChangeView={setChangeView}/>

        {changeView ? (
          <>
            <Filter doctors={doctors} allDoctors={data} setDoctors={setDocters}/>
            <DoctorsList
              doctors={doctors}
              // setDocters={setDocters}
              setChangeView={setChangeView}
              setIndex={setIndex}
            />
          </>
        ) : (
          <Detail
            doctor={doctors[doctorIndex]}
            setChangeView={setChangeView}
            setIndex={setIndex}
          />
        )}
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
