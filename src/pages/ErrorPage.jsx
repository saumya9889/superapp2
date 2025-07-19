import { Link, useRouteError } from "react-router-dom";
import starrySky from "../assets/starry-sky.jpg";
import moonGlow from "../assets/moon-glow.png";
import rocket from "../assets/rocket.png";
import { Text, Image } from "../components/ui/index.js";
import { ERROR_COLOR } from "../constants.js";
import styles from "./styles/ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.container}>
      <Image src={starrySky} />
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.status}>
            <Text
              color={ERROR_COLOR}
              inLineStyles={{ fontSize: "160px" }}
              weight="700"
            >
              4
            </Text>
            <div className={styles.moon}>
              <Image src={moonGlow} />
            </div>
            <Text
              color={ERROR_COLOR}
              inLineStyles={{ fontSize: "160px" }}
              weight="700"
            >
              4
            </Text>
          </div>
          <div className={styles.message}>
            <Text color={ERROR_COLOR} step={5} weight="500">
              You are lost deep in space...
            </Text>
            <Text>The page you are looking for does not exist.</Text>
          </div>
        </div>

        <div className={styles.link}>
          <div className={styles.rocket}>
            <Image src={rocket} />
          </div>
          <Link to="/">
            <Text step={1} weight="700">
              LAUNCH HOMEPAGE
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
