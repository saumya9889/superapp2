import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui";
import NewsCard from "./NewsCard";
import NewsCardFallback from "./NewsCardFallback";
import NewsCardSkeleton from "./NewsCardSkeleton";
import NotesCard from "./NotesCard";
import TimerCard from "./TimerCard";
import UserCard from "./UserCard";
import WeatherCard from "./WeatherCard";
import WeatherCardFallback from "./WeatherCardFallback";
import WeatherCardSkeleton from "./WeatherCardSkeleton";
import styles from "./styles/index.module.css";

export default function HomePage() {
  const { news, weather } = useLoaderData();
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.leftGroup}>
            <TopComponents weather={weather} />
            <TimerCard />
          </div>
          <Suspense fallback={<NewsCardSkeleton />}>
            <Await resolve={news} errorElement={<NewsCardFallback />}>
              {(resolvedNews) => <NewsCard news={resolvedNews[0]} />}
            </Await>
          </Suspense>
        </main>

        <div className={styles.browseButton}>
          <Button onClick={() => navigate('entertainment')} variant="secondary">Browse</Button>
        </div>
      </div>
    </>
  );
}

const TopComponents = ({ weather }) => {
  return (
    <div className={styles.topComponents}>
      <div className={styles.userAndWeather}>
        <UserCard />
        <Suspense fallback={<WeatherCardSkeleton />}>
          <Await resolve={weather} errorElement={<WeatherCardFallback />}>
            {(resolvedWeather) => <WeatherCard weather={resolvedWeather} />}
          </Await>
        </Suspense>
      </div>
      <NotesCard />
    </div>
  );
};
