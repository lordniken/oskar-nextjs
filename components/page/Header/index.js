import Head from "next/head";
import Link from "next/link";
import Menu from "./menu";
import css from "./header.module.scss";

export default function Header({ children }) {
  return (
    <>
      <Head>
        <title>{children} / Кинотеатр "Оскар"</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
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
