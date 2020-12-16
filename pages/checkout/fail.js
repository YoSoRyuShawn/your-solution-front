import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home(props) {
  const router = useRouter();
  const {name} = router.query;
  return (
    <div>
      <h1>Sorry, {name}</h1>
      <Link href="/">
        <a>TOP</a>
      </Link>
    </div>
  );
}