import Header from "../../components/header";
import Footer from "../../components/footer";
import MovieItem from "../../components/cinema/movieItem";
import Content from "../../components/content";
import css from "../../css/cinema.module.css";
import { useState, useEffect, useRef } from "react";
import { declOfNum } from "../../components/functions";

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
            item.type.toLowerCase().indexOf(filteredText.toLowerCase()) >= 0
        )
      : movies;

  const filteredLenght = filteredMovies().length;

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
          {movies &&
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
