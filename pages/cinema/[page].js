import Header from "../../components/header";
import Footer from "../../components/footer";
import MovieItem from "../../components/cinema/movieItem";
import Content from "../../components/content";
import css from "../../css/cinema.module.css";
import { useState, useEffect, useRef } from "react";

export default function Cinema({ movies }) {
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
            item.type.indexOf(filteredText) >= 0
        )
      : movies;

  return (
    <>
      <Header>Кинотеатр</Header>
      <Content>
        <div className={css.filter_container}>
          <div className={css.filter}>
            <input
              type="text"
              className={css.input}
              placeholder="Фильтр по названию или жанру"
              ref={filterRef}
              onChange={(e) => setFilteredText(e.target.value)}
            />
          </div>
          <span className={css.filer_count}>
            {filteredText &&
              (filteredMovies().length
                ? `Найдено ${filteredMovies().length} совпадений`
                : "Совпадений не найдено")}
          </span>
        </div>
        <div className={css.container}>
          {movies &&
            filteredMovies().map((item, index) => (
              <MovieItem key={index} data={item} />
            ))}
        </div>
      </Content>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const pages = ["today", "future"];

  const paths = pages.map((page) => ({
    params: { page },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params: { page } }) => {
  const res = await fetch(
    `http://xn----7sbbina5amcvokdhi4p.xn--p1ai/api/?action=${page}`
  );

  const movies = await res.json();
  return { props: { movies } };
};
