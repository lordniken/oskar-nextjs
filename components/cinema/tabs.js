import css from "../../css/cinema_tab.module.css";
import Link from "next/link";

export const tabList = [
  {
    title: "Сегодня в кино",
    link: "today",
  },
  {
    title: "Скоро в кино",
    link: "future",
  },
];

export function Tabs({ page }) {
  return (
    <div className={css.container}>
      <ul className={css.tabs}>
        {tabList.map(({ title, link }, index) => (
          <li className={css.item} key={index}>
            {page === link ? (
              <span className={[css.link, css.active].join(" ")}>{title}</span>
            ) : (
              <Link href={"/cinema/[page]"} as={`/cinema/${link}`}>
                <a className={css.link}>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className={css.search}>
        <input
          type="text"
          className={css.input}
          placeholder="Фильтр по названию или жанру"
        />
      </div>
    </div>
  );
}
