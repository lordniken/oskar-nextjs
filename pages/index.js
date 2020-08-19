import Head from "next/head";
import Header from "../components/header";
import Content from "../components/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
    </>
  );
}
