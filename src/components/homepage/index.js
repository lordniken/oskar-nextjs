import Page from "../page";

export default function Homepage() {
  return (
    <Page title="Главная страница">
      <div className="index">
        <h3>Привет!</h3>
        <p>
          Это небольшой pet-project, созданный при помощи Next.js (SSR). Все
          данные актуальны и подтягиваются через API существующего кинотеатра. В
          процессе разработки были использованы React, SASS и пакет
          include-media (для оптимизации работы сайта на мобильных устройсвах).
        </p>
      </div>
    </Page>
  );
}
