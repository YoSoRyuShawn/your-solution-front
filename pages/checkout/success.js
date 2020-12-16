import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { invokeZoom } from "../../utils/data";
import Link from "next/link";
import Title from "../../components/Title";

// export async function getServerSideProps() {
//   console.log("fetching");
//   const url = await invokeZoom();
//   return {
//     props: { url },
//   };
// }

export default function Home() {
  const router = useRouter();
  const { name, url } = router.query;
  // const [url, setUrl] = useState(props.url);
  return (
    <div>
      <Head>
        <title>Hey, Doc!</title>
        <link rel="icon" href="/favicon-heart.ico" />
      </Head>
      <Title />
      <div className="container">
      <style jsx >{`
      .container {
        margin-top: 310px;
      }
      `}</style>
      <h1>Thank you, {name}</h1>
      <div>
        Zoom Link: <a href={url}>here</a>
      </div>
      <Link href="/">
        <a>TOP</a>
      </Link>
      </div>
    </div>
  );
}