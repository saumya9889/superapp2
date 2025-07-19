import { Text } from "../../components/ui";
import { PRIMARY_COLOR, NEUTRAL_COLOR } from "../../constants.js";
import styles from "./styles/TermsAndConditions.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.termsAndConditions}>
      <Text step={2} color={NEUTRAL_COLOR}>
        By clicking on Sign up. you agree to Superapp{" "}
        <a href="#" style={{ color: PRIMARY_COLOR }}>
          Terms and Conditions of Use
        </a>
      </Text>

      <Text step={2} color={NEUTRAL_COLOR}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp{" "}
        <a href="#" style={{ color: PRIMARY_COLOR }}>
          Privacy Policy
        </a>
      </Text>
    </div>
  );
}
