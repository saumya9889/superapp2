import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useInputValidation } from "../../hooks/useInputValidation.js";
import FormCheckbox from "../../components/form/FormCheckbox";
import FormInput from "../../components/form/FormInput";
import { Button } from "../../components/ui/index.js";
import {
  contactIsValid,
  emailIsValid,
  nameIsValid,
  usernameIsValid,
} from "../../utils/inputValidation";
import styles from "./styles/Form.module.css";

export default function Form() {
  const [formDidSubmit, setFormDidSubmit] = useState(false);
  const checkboxRef = useRef();
  const navigate = useNavigate();

  const {
    input: nameInput,
    handleInputChange: handleNameInputChange,
    handleIsTouched: handleNameIsTouched,
    enteredInputIsValid: enteredNameIsValid,
    isInvalidInput: isInvalidName,
    reset: resetName,
  } = useInputValidation((value) => nameIsValid(value));

  const {
    input: usernameInput,
    handleInputChange: handleUsernameInputChange,
    handleIsTouched: handleUsernameIsTouched,
    enteredInputIsValid: enteredUsernameIsValid,
    isInvalidInput: isInvalidUsername,
    reset: resetUsername,
  } = useInputValidation((value) => usernameIsValid(value));

  const {
    input: emailInput,
    handleInputChange: handleEmailInputChange,
    handleIsTouched: handleEmailIsTouched,
    enteredInputIsValid: enteredEmailIsValid,
    isInvalidInput: isInvalidEmail,
    reset: resetEmail,
  } = useInputValidation((value) => emailIsValid(value));

  const {
    input: contactInput,
    handleInputChange: handleContactInputChange,
    handleIsTouched: handleContactIsTouched,
    enteredInputIsValid: enteredContactIsValid,
    isInvalidInput: isInvalidContact,
    reset: resetContact,
  } = useInputValidation((value) => contactIsValid(value));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredUsernameIsValid &&
    enteredEmailIsValid &&
    enteredContactIsValid
  ) {
    formIsValid = true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleNameIsTouched();
    handleUsernameIsTouched();
    handleEmailIsTouched();
    handleContactIsTouched();

    if (!formIsValid || !checkboxRef.current.isChecked) {
      setFormDidSubmit(true);
      return;
    }

    const user = {
      name: nameInput,
      username: usernameInput,
      email: emailInput,
      contact: contactInput,
    };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("You are signed in!", {
      duration: 4000,
    });

    navigate("/select-category");

    resetName();
    resetUsername();
    resetEmail();
    resetContact();
    checkboxRef.current.setIsChecked(false);
    setFormDidSubmit(false);
  };

  const isValidFormSubmitted = formIsValid && formDidSubmit;

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <FormInput
            placeholder="Name"
            value={nameInput}
            onChange={handleNameInputChange}
            onBlur={handleNameIsTouched}
            isInvalid={isInvalidName}
            invalidMessage="Please enter a valid name."
          />
          <FormInput
            placeholder="Username"
            value={usernameInput}
            onChange={handleUsernameInputChange}
            onBlur={handleUsernameIsTouched}
            isInvalid={isInvalidUsername}
            invalidMessage="Please enter a valid username"
          />
          <FormInput
            placeholder="Email"
            value={emailInput}
            onChange={handleEmailInputChange}
            onBlur={handleEmailIsTouched}
            isInvalid={isInvalidEmail}
            invalidMessage="Please enter a valid email"
          />
          <FormInput
            placeholder="Mobile"
            value={contactInput}
            onChange={handleContactInputChange}
            onBlur={handleContactIsTouched}
            isInvalid={isInvalidContact}
            invalidMessage="Please enter a valid mobile number"
          />
        </div>
        <FormCheckbox
          ref={checkboxRef}
          isValidFormSubmitted={isValidFormSubmitted}
        />
        <Button>Sign up</Button>
      </form>
    </div>
  );
}
