import classes from "./Input.module.css";

const Input = (props) => {
  const invalidStyle =
    classes["div-input"] + " " + classes["div-input__invalid"];
  const styles = !props.hasError ? classes["div-input"] : invalidStyle;
  
  return (
    <div className={styles}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        id={props.label}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && (
        <p className={classes["error-text"]}>{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
