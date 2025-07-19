import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import styles from "./styles/Contents.module.css";

export default function Contents() {
  const categories = useLoaderData();

  return (
    <div className={styles.container}>
      {categories && categories.map((c) => <Category key={c.id} genre={c} />)}
    </div>
  );
}
