import styles from "./styles/CategorySkeleton.module.css";

export default function CategorySkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.imageLoader}></div>
      <div className={styles.imageLoader}></div>
      <div className={styles.imageLoader}></div>
      <div className={styles.imageLoader}></div>
    </div>
  );
}
