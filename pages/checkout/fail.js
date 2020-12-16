import Head from "next/head";
import Link from "next/link";
import Title from "../../components/Title";
import { useRouter } from "next/router";


export default function Home(props) {
  const router = useRouter();
  const {name} = router.query;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <div className="container">
      <style jsx >{`
      .container {
        margin-top: 310px;
      }
      `}</style>
        <h1>Sorry, {name}</h1>
        <Link href="/">
          <a>TOP</a>
        </Link>
      </div>
    </div>
  );
}
