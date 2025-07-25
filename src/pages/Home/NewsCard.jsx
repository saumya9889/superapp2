import { Link } from "react-router-dom";
import { Image, Text } from "../../components/ui";
import { formatDateString } from "../../utils/formatDateString";
import styles from "./styles/NewsCard.module.css";

export default function NewsCard({ news }) {
  const publishedTime = news.published_at
    ? formatDateString(news.published_at)
    : { date: "N/A", time: "" };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={news.image_url}
            fallbackImage="https://rezista.in/wp-content/uploads/2020/07/Image-Placeholder-Dark.png"
            alt={news.title}
          />
        </div>
        <div className={styles.info}>
          <Text step={6} weight="500">
            <Link to={news.url} target="_blank" rel="noopener noreferrer">
              {news.title}
            </Link>
          </Text>
          <Text step={2}>
            {publishedTime.date} | {publishedTime.time}
          </Text>
        </div>
      </div>
      <div className={styles.description}>
        <Text>{news.summary || "No description available."}</Text>
      </div>
    </div>
  );
}
