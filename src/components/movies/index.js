import Page from "../page";
import css from "./movies.module.scss";
import MovieItem from "../MovieItem";
import { declOfNum } from "../functions";
import { useState, useEffect, useRef } from "react";
import Timeline from "../timeline";

export default function MoviesPage({ movies, page }) {
  const [filteredText, setFilteredText] = useState("");
  const filterRef = useRef(null);

  useEffect(() => {
    filterRef.current.focus();
  }, []);

  const filteredMovies = () =>
    filteredText
      ? movies.filter(
          (item) =>
            item.title.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0 ||
            item.type.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0
        )
      : movies;

  const filteredLenght = filteredMovies().length;

  return (
    <Page title="Кинотеатр">
      <div className={css.filter}>
        <div className={css.filter_container}>
          <input
            type="text"
            placeholder="Фильтр по названию или жанру"
            ref={filterRef}
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
      {page == "today" && <Timeline movies={movies} />}
      <div className={css.container}>
        {movies.length > 0 ? (
          movies.map((item, index) => (
            <MovieItem
              key={index}
              data={item}
              filtered={
                filteredText &&
                !filteredMovies().find(
                  (filteredItem) => filteredItem.title === item.title
                )
              }
            />
          ))
        ) : (
          <p>Информация о фильмах отсуствует</p>
        )}
      </div>
    </Page>
  );
}
