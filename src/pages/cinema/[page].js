import { useRouter } from "next/router";
import MoviesPage from "../../components/movies";
import MoviePage from "../../components/movieInfo";

const staticPages = ["today", "future"];

export default function Cinema({ payload }) {
  const {
    query: { page },
  } = useRouter();

  return staticPages.includes(page) ? (
    <MoviesPage movies={payload} page={page} />
  ) : (
    <MoviePage movie={payload} />
  );
}

Cinema.getInitialProps = async ({ query: { page } }) => {
  const res = await fetch(
    `http://xn----7sbbina5amcvokdhi4p.xn--p1ai/api/?action=${page}`
  );

  const payload = await res.json();
  return { payload };
};
