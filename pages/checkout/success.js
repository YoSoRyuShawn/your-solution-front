import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { invokeZoom } from "../../utils/data";
import Link from "next/link";

export async function getServerSideProps() {
  console.log("fetching");
  const url = await invokeZoom();
  return {
    props: { url },
  };
}

export default function Home(props) {
  const router = useRouter();
  const {name} = router.query;
  const [url, setUrl] = useState(props.url);
  return (
    <div>
      <h1>Thank you, {name}</h1>
      <div>
        Zoom Link: <a href={url}>here</a>
      </div>
      <Link href="/">
        <a>TOP</a>
      </Link>
    </div>
  );
}