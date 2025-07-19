import { useNavigate } from "react-router-dom";
import logo from "../../assets/super-app-logo.png";
import profile from "../../assets/profile.png";
import { Image } from "../../components/ui";
import styles from "./styles/Navigation.module.css";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <Image src={logo} alt={"app logo"} />
      </div>
      <button
        onClick={() => navigate("..", { relative: "path" })}
        className={styles.profileButton}
      >
        <div className={styles.profile}>
          <Image src={profile} alt={"app logo"} />
        </div>
      </button>
    </nav>
  );
}
