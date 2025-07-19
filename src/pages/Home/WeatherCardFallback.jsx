import { useAsyncError } from "react-router-dom";
import { Fallback } from "../../components/ui";
import styles from "./styles/WeatherCardFallback.module.css";

export default function WeatherCardFallback() {
  const error = useAsyncError();

  return (
    <div className={styles.container}>
      <Fallback error={error} />
    </div>
  );
}
