import Head from "next/head";
import Link from "next/link";
import Menu from "./menu";
import header from "../css/header.module.css";

export default function Header({ children }) {
  return (
    <>
      <Head>
        <title>{children} / Кинотеатр "Оскар"</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={header.container}>
        <Link href="/">
          <a>
            <div className={header.logo} />
          </a>
        </Link>
        <div className={header.line} />
        <Menu />
      </header>
    </>
  );
}
