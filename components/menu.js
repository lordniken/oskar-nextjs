import Link from "next/link";
import { useRouter } from "next/router";
import css from "../css/menu.module.css";

export default function Menu() {
  const menuList = [
    { title: "Кинотеатр", href: "/cinema/[page]", as: "/cinema/today" },
    { title: "Ресторан", href: "/restaurant" },
    { title: "Гостиница", href: "/hotel" },
  ];

  const router = useRouter();

  return (
    <nav className={css.container}>
      <ul className={css.menu}>
        {menuList.map(({ title, href, as }, index) => (
          <li className={css.item} key={index}>
            {router.pathname === href ? (
              <span className={[css.link, css.active].join(" ")}>{title}</span>
            ) : (
              <Link href={href} as={as}>
                <a className={css.link}>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
