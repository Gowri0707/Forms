import { useState } from "react";
import Input from "./UI/Input";
import classes from "./BasicForm.module.css";

const BasicForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [isnameInputTouched, setIsNameInputtouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailInputTouched, setIsEmailInputtouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "" ;
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = isnameInputTouched && !enteredNameIsValid;
  const emailInputIsInvalid = isEmailInputTouched && !enteredEmailIsValid;
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setIsNameInputtouched(true);
  };

  const nameBlurHandler = () => {
    setIsNameInputtouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsEmailInputtouched(true);
  };

  const emailBlurHandler = () => {
    setIsEmailInputtouched(true);
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    console.log('name', enteredName, enteredEmail);
    setEnteredName("");
    setIsNameInputtouched(false);
    setEnteredEmail("");
    setIsEmailInputtouched(false);
  };
  
  return (
    <form className={classes['basic-form__div']} onSubmit={submitEventHandler}>
      <Input
        label="Name"
        type="text"
        id="name"
        value={enteredName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        error={nameInputIsInvalid}
        errorText={"Name should not be empty"}
      />
      <Input
        label={"Email"}
        type="text"
        id="name"
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailInputIsInvalid}
        errorText={"Email is invalid"}
      />
      <button disabled={!formIsValid}>Submit</button>
    </form>
  );
};

export default BasicForm;
