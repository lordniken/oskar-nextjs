import Page from "../page";
import css from "../../css/movies.module.css";
import MovieItem from "../../components/cinema/movieItem";
import { declOfNum } from "../../components/functions";
import { useState, useEffect, useRef } from "react";

export default function MoviesPage({ movies }) {
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
      <div className={css.filter_container}>
        <div className={css.filter}>
          <input
            type="text"
            className={css.input}
            placeholder="Фильтр по названию или жанру"
            ref={filterRef}
            onChange={({ target: { value } }) => setFilteredText(value)}
          />
        </div>
        <span className={css.filer_count}>
          {filteredText &&
            (filteredLenght
              ? `Найдено ${filteredLenght} ${declOfNum(filteredLenght)}`
              : "Совпадений не найдено")}
        </span>
      </div>
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
