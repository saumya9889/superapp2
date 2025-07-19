import banner from "../../assets/avatar-banner.png";
import { Image } from "../../components/ui/index.js";
import UserDetails from "./UserDetails";
import styles from "./styles/UserCard.module.css";

export default function UserCard() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src={banner} alt="avatar banner" />
      </div>
      <UserDetails />
    </div>
  );
}
