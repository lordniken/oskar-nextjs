import Head from "next/head";
import Link from "next/link";
import Menu from "./menu";
import css from "../../css/header.module.css";

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
      <header className={css.container}>
        <Link href="/">
          <a>
            <div className={css.logo} />
          </a>
        </Link>
        <div className={css.line} />
        <Menu />
      </header>
    </>
  );
}
