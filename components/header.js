import header from "../css/header.module.css";
import menu from "../css/menu.module.css";
import Link from "next/link";
import Head from "next/head";

function Menu() {
  return (
    <nav className={menu.container}>
      <ul className={menu.menu}>
        <li className={menu.item}>
          <Link href="/cinema">
            <a className={menu.link}>Кинотеатр</a>
          </Link>
        </li>
        <li className={menu.item}>
          <a href="#" className={menu.link}>
            Ресторан
          </a>
        </li>
        <li className={menu.item}>
          <a href="#" className={menu.link}>
            Гостиница
          </a>
        </li>
      </ul>
    </nav>
  );
}

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
