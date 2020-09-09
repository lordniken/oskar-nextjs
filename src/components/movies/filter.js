import css from "./movies.module.scss";
import { declOfNum } from "../functions";

export default function Filter({
  filteredText,
  setFilteredText,
  filteredLenght,
}) {
  return (
    <div className={css.filter}>
      <div className={css.filter_container}>
        <input
          type="text"
          placeholder="Фильтр по названию или жанру"
          onChange={({ target: { value } }) => setFilteredText(value)}
        />
      </div>
      <span className={css.filter_message}>
        {filteredText &&
          (filteredLenght
            ? `Найдено ${filteredLenght} ${declOfNum(filteredLenght, [
                "совпадение",
                "совпадения",
                "совпадений",
              ])}`
            : "Совпадений не найдено")}
      </span>
    </div>
  );
}
