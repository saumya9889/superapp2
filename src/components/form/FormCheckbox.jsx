import { forwardRef, useImperativeHandle, useState } from "react";
import { ERROR_COLOR, NEUTRAL_COLOR, PRIMARY_COLOR } from "../../constants";
import { Text } from "../ui/index.js";
import styles from "./styles/FormCheckbox.module.css";

const FormCheckbox = forwardRef(function FormCheckbox(props, ref) {
  const [isChecked, setIsChecked] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      isChecked: isChecked,
      setIsChecked,
    };
  });

  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          style={{ accentColor: PRIMARY_COLOR }}
          id="terms-conditions"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="terms-conditions">
          <Text color={NEUTRAL_COLOR}>
            Share my registration data with Superapp.
          </Text>
        </label>
      </div>

      {props.isValidFormSubmitted && !isChecked && (
        <Text step={2} color={ERROR_COLOR}>
          Check this box to accept our terms and conditions.
        </Text>
      )}
    </div>
  );
});

export default FormCheckbox;
