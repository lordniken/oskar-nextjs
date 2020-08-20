import tabcss from "../../css/cinema_tab.module.css";
import Link from "next/link";

export const tabList = [
  {
    title: "Сегодня в кино",
    link: "current",
  },
  {
    title: "Скоро в кино",
    link: "future",
  },
];

export function Tabs({ page }) {
  return (
    <div className={tabcss.container}>
      <ul className={tabcss.tabs}>
        {tabList.map(({ title, link }, index) => (
          <li
            className={[tabcss.item, page === link && tabcss.active].join(" ")}
            key={index}
          >
            <Link href={"/cinema/[page]"} as={`/cinema/${link}`}>
              <a className={tabcss.link}>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={tabcss.search}>
        <input type="text" className={tabcss.input} placeholder="Фильтр" />
      </div>
    </div>
  );
}
