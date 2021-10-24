import Input from "./UI/Input";
import classes from "./BasicForm.module.css";
import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    value: enteredName,
    valid: enteredNameIsValid,
    resetInput: nameInputReset
  } = useInput((value) => value.trim() !== "");
  const {
    hasError: lastNameInputHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    value: lastName,
    valid: lastNameIsValid,
    resetInput: lastNameInputReset
  } = useInput((value) => value.trim() !== '');
  const {
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    value: enteredEmail,
    valid: enteredEmailIsValid,
    resetInput: emailInputReset
  } = useInput((value) => value.includes("@"));


  const formIsValid = enteredNameIsValid && lastNameIsValid &&enteredEmailIsValid;

  const submitEventHandler = (event) => {
    event.preventDefault();
    console.log("name and email", enteredName, enteredEmail);
    emailInputReset();
    nameInputReset();
    lastNameInputReset();
  };

  return (
    <form className={classes["basic-form__div"]} onSubmit={submitEventHandler}>
      <Input
        label="First Name"
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        hasError={nameInputHasError}
        errorText={"First Name should not be empty"}
      />
      <Input
        label="Last Name"
        type="text"
        value={lastName}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        hasError={lastNameInputHasError}
        errorText={"Last Name Input should not be empty"}
      />
      <Input
        label={"Email"}
        type="text"
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        hasError={emailInputHasError}
        errorText={"Email is invalid"}
      />
      <button disabled={!formIsValid}>Submit</button>
    </form>
  );
};

export default BasicForm;
