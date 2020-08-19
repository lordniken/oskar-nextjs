import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

function Movie({ data }) {
  return <></>;
}

export default function Cinema({ movies }) {
  return (
    <>
      <Header>Кинотеатр</Header>
      <pre>
        {movies.map((item, index) => (
          <Movie key={index} data={item} />
        ))}
      </pre>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://xn----7sbbina5amcvokdhi4p.xn--p1ai/api/");
  const movies = await res.json();
  return { props: { movies } };
};
