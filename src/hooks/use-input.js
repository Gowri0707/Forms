import { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { isInputTouched: true, enteredValue: action.name };
  } else if (action.type === "INPUT_BLUR") {
    return { ...state, isInputTouched: true };
  } else {
    return { isInputTouched: false, enteredValue: "" };
  }
};

const useInput = (validateValue) => {
  /* alternative
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputtouched] = useState(false);
*/
  const [input, dispatchInputAction] = useReducer(inputReducer, {
    enteredValue: "",
    isInputTouched: false,
  });

  //   const valueIsValid = validateValue(enteredValue);
  //   const hasError = isInputTouched && !valueIsValid;

  const valueIsValid = validateValue(input.enteredValue);
  const hasError = input.isInputTouched && !valueIsValid;

  const inputChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    // setIsInputtouched(true);
    dispatchInputAction({type: "INPUT_CHANGE", name: event.target.value });
  };

  const inputBlurHandler = () => {
    // setIsInputtouched(true);
    dispatchInputAction({type: "INPUT_BLUR"})
  };

  const resetInput = () => {
    // setEnteredValue("");
    // setIsInputtouched(false);
    dispatchInputAction({type: "INPUT_RESET"})
  };

  return {
    hasError,
    value: input.enteredValue,
    valid: valueIsValid,
    inputBlurHandler,
    inputChangeHandler,
    resetInput,
  };
};

export default useInput;
