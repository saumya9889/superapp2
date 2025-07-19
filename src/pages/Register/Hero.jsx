import heroImage from "../../assets/super-app-register-hero.png";
import { Image, Text } from "../../components/ui/index.js";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image src={heroImage} alt="Hero image" />
      </div>

      <div className={styles.heroContent}>
        <Text step={9} weight="700">
          Discover new things on Superapp
        </Text>
      </div>
    </div>
  );
}
