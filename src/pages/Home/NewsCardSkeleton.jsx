import styles from "./styles/NewsCardSkeleton.module.css";

export default function NewsCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.textContainer}>
        <div style={{ width: "100%" }} className={styles.text}></div>
        <div style={{ width: "100%" }} className={styles.text}></div>
        <div style={{ width: "100%" }} className={styles.text}></div>
        <div style={{ width: "100%" }} className={styles.text}></div>
        <div style={{ width: "60%" }} className={styles.text}></div>
      </div>
    </div>
  );
}
