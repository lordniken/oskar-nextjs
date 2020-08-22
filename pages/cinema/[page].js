import { useRouter } from "next/router";
import MoviesPage from "../../components/cinema/movies";
import MoviePage from "../../components/cinema/movie";

const staticPages = ["today", "future"];

export default function Cinema({ movies }) {
  const {
    query: { page },
  } = useRouter();

  return staticPages.includes(page) ? (
    <MoviesPage movies={movies} />
  ) : (
    <MoviePage movie={movies} />
  );
}

export async function getStaticPaths() {
  const paths = staticPages.map((page) => ({
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
