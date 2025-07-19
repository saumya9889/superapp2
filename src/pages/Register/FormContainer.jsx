import Form from "./Form";
import TermsAndConditions from "./TermsAndConditions";
import FormTitle from "./FormTitle";
import styles from "./styles/FormContainer.module.css";

export default function FormContainer() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.content}>
        <FormTitle />
        <Form />
        <TermsAndConditions />
      </div>
    </div>
  );
}
