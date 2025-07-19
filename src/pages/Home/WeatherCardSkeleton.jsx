import styles from "./styles/WeatherCardSkeleton.module.css";

export default function WeatherCardSkeleton() {
  const pulseDiv = styles.pulseDiv;

  return (
    <div className={styles.container}>
      <div className={`${styles.now} ${pulseDiv}`}></div>
      <div className={styles.weather}>
        <div className={pulseDiv}></div>
        <div className={pulseDiv}></div>
        <div className={styles.lastDiv}>
          <div className={pulseDiv}></div>
          <div className={pulseDiv}></div>
        </div>
      </div>
    </div>
  );
}
