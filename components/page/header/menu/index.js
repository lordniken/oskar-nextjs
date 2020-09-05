import Link from "next/link";
import { useRouter } from "next/router";
import css from "./menu.module.scss";

export default function Menu() {
  const menuList = [
    { title: "Сегодня в кино", href: "/cinema/[page]", as: "/cinema/today" },
    { title: "Скоро в кино", href: "/cinema/[page]", as: "/cinema/future" },
  ];

  const router = useRouter();

  return (
    <nav className={css.container}>
      <ul className={css.list}>
        {menuList.map(({ title, href, as }, index) => (
          <li className={css.list_item} key={index}>
            {router.asPath === as ? (
              <span
                className={[css.list_item_link, css.list_item_link_active].join(
                  " "
                )}
              >
                {title}
              </span>
            ) : (
              <Link href={href} as={as}>
                <a className={css.list_item_link}>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
