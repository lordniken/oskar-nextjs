import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import MovieItem from "../../components/cinema/movieItem";
import Content from "../../components/content";
import css from "../../css/cinema.module.css";

export default function Cinema({ movies }) {
  const router = useRouter();

  return (
    <>
      <Header>Кинотеатр</Header>

      <Content>
        <div className={css.container}>
          {movies &&
            movies.map((item, index) => <MovieItem key={index} data={item} />)}
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
