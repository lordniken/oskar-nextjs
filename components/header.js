import styles from "../css/header.module.css";

function Menu() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.item}>Кинотеатр</li>
        <li className={styles.item}>Ресторан</li>
        <li className={styles.item}>Гостиница</li>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <Menu />
    </header>
  );
}
