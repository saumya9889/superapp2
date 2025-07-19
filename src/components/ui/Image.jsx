import styles from "./styles/Image.module.css";

export default function Image({ src, alt, fallbackImage }) {
  return <img className={styles.image} src={src ?? fallbackImage} alt={alt} />;
}
