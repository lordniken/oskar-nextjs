import { useRouter } from "next/router";
import MoviesPage from "../../components/movies";
import MoviePage from "../../components/movieInfo";

const staticPages = ["today", "future"];

export default function Cinema({ payload }) {
  const {
    query: { page },
  } = useRouter();

  return staticPages.includes(page) ? (
    <MoviesPage movies={payload} />
  ) : (
    <MoviePage movie={payload} />
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

  const payload = await res.json();
  return { props: { payload } };
};
