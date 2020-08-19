import header from "../css/header.module.css";
import menu from "../css/menu.module.css";

function Menu() {
  return (
    <nav className={menu.container}>
      <ul className={menu.menu}>
        <li className={menu.item}>
          <a href="#" className={menu.link}>
            Кинотеатр
          </a>
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

export default function Header() {
  return (
    <header className={header.container}>
      <div className={header.logo} />
      <div className={header.line} />
      <Menu />
    </header>
  );
}
