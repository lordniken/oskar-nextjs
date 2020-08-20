import Header from "../../components/header";
import Footer from "../../components/footer";
import { tabList, Tabs } from "../../components/cinema/tabs";
import { useRouter } from "next/router";
import Movie from "../../components/cinema/movieItem";
import Content from "../../components/content";
import css from "../../css/cinema.module.css";

export default function Cinema({ movies }) {
  const router = useRouter();

  return (
    <>
      <Header>Кинотеатр</Header>
      <Tabs page={router.query.page} />
      <Content>
        <div class={css.container}>
          {movies &&
            movies.map((item, index) => <Movie key={index} data={item} />)}
        </div>
      </Content>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = tabList.map(({ link }) => ({
    params: { page: link },
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
