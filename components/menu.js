import Link from "next/link";
import { useRouter } from "next/router";
import menu from "../css/menu.module.css";

export default function Menu() {
  const menuList = [
    { title: "Кинотеатр", href: "/cinema/[page]", as: "/cinema/current" },
    { title: "Ресторан", href: "/restaurant" },
    { title: "Гостиница", href: "/hotel" },
  ];

  const router = useRouter();

  return (
    <nav className={menu.container}>
      <ul className={menu.menu}>
        {menuList.map(({ title, href, as }, index) => (
          <li className={menu.item} key={index}>
            <Link href={href} as={as}>
              <a
                className={[
                  menu.link,
                  router.pathname === href && menu.active,
                ].join(" ")}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
