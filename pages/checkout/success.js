import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Title from "../../components/Title";
import styles from "../../styles/Success.module.css";
import moment from "moment";

// export async function getServerSideProps() {
//   console.log("fetching");
//   const url = await invokeZoom();
//   return {
//     props: { url },
//   };
// }

export default function Home() {
  const router = useRouter();
  const { name, url, doctorPic, date, time, doctorName } = router.query;
  // const [url, setUrl] = useState(props.url);
  const dateFormat = moment(date).format("MMM Do YYYY");
  return (
    <div>
      <Head>
        <title>Hey, Doc!</title>
        <link rel="icon" href="/favicon-heart.ico" />
      </Head>
      <Title />
      <div className={styles.container}>
        <div className={styles.massage}>
          <p className={styles.thank}>Thank you, {name} !</p>
          <p className={styles.mail}>We sent you an email with detailed information.</p>
        </div>
        <div className={styles.doctor}>
          <img src={doctorPic} className={styles.img}></img>
          <div className={styles.detail}>
            <p>{doctorName}</p>
            <p>Zoom online meeting at {time}, {dateFormat}</p>
            <p>Zoom Link: <a href={url}>here</a></p>
          </div>
        </div>
        <button className={styles.backbtn}>Back to TOP</button>
        {/* <Link href="/">
          <a>TOP</a>
        </Link> */}
      </div>
    </div>
  );
}