import Page from "../page";
import css from "./movie.module.scss";
import InfoBlock from "./info";
import ScheduleBlock from "./schedule";

export default function MoviePage({
  movie: {
    title,
    image,
    en_title,
    age,
    country,
    type,
    duration,
    director,
    actors,
    format,
    description,
    trailer,
    rating,
    start,
    schedule_ts,
  },
}) {
  return (
    <Page title={title}>
      <div className={css.container}>
        <div className={css.poster}>
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${image}.jpg`}
            title={title}
          />
        </div>
        <div className={css.info}>
          <h1>{title}</h1>
          <h3>
            {en_title && `${en_title}, `}
            {age}+
          </h3>
          <InfoBlock
            country={country}
            type={type}
            duration={duration}
            director={director}
            actors={actors}
            format={format}
            rating={rating}
            start={start}
            age={age}
          />
          <p className={css.info_description}>{description}</p>
          <iframe className={css.info_trailer} src={trailer} />
        </div>
        {schedule_ts && <ScheduleBlock schedule={schedule_ts} />}
      </div>
    </Page>
  );
}
