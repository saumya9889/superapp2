import Hero from "./Hero";
import FormContainer from "./FormContainer";
import styles from "./styles/index.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <FormContainer />
    </div>
  );
}
