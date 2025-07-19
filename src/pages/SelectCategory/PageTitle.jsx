import logo from "../../assets/super-app-logo.png";
import { Image, Text } from "../../components/ui/index.js";
import styles from "./styles/PageTitle.module.css";

export default function PageTitle() {
  return (
    <div>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <Text step={9} weight="700">
        Choose your entertainment category
      </Text>
    </div>
  );
}
