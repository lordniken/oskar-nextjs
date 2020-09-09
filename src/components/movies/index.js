import Page from "../page";
import css from "./movies.module.scss";
import MovieItem from "../MovieItem";
import { useState } from "react";
import Timeline from "../timeline";
import Filter from "./filter";

export default function MoviesPage({ movies, page }) {
  const [filteredText, setFilteredText] = useState("");

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
      <Filter
        filteredText={filteredText}
        setFilteredText={setFilteredText}
        filteredLenght={filteredLenght}
      />
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
