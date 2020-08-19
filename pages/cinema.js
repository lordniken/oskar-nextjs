import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import tabcss from "../css/cinema_tab.module.css";
import Link from "next/link";

function Movie({ data }) {
  return (
    <div>
      {/*<img src="http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/07871915a8107172b3b5dc15a6574ad3.jpg" />*/}
    </div>
  );
}

function Tab() {
  return (
    <div className={tabcss.container}>
      <ul className={tabcss.tabs}>
        <li className={[tabcss.item, tabcss.active].join(" ")}>
          <Link href="/">
            <a className={tabcss.link}>Сегодня в кино</a>
          </Link>
        </li>
        <li className={tabcss.item}>
          <Link href="/">
            <a className={tabcss.link}>Сегодня в кино</a>
          </Link>
        </li>
      </ul>
      <div className={tabcss.search}>
        <input type="text" className={tabcss.input} placeholder="Фильтр" />
      </div>
    </div>
  );
}

export default function Cinema({ movies }) {
  return (
    <>
      <Header>Кинотеатр</Header>

      <Tab />

      <Movie />
      {/*movies.map((item, index) => (
          <Movie key={index} data={item} />
        ))*/}

      <Footer />
    </>
  );
}

/*export const getStaticProps = async () => {
  const res = await fetch("http://xn----7sbbina5amcvokdhi4p.xn--p1ai/api/");
  const movies = await res.json();
  return { props: { movies } };
};*/

/*
title": "Час дьявола",
    "image": "07871915a8107172b3b5dc15a6574ad3",
    "en_title": "Cleansing Hour",
    "country": "США",
    "type": "хоррор",
    "duration": "1:35",
    "age": "18",
    "format": "2D",
    "rating": [
      "5.7",
      "5.7",
      "1597859478"
    ],
    "schedule": [
      "22:15"
    ]
*/
