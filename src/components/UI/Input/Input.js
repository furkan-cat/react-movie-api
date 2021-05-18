import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <h2>Youtube Search API</h2>
      <input
        className={classes.input}
        onChange={(event) => props.setSearchValue(event.target.value)}
        value={props.value}
        placeholder="Type to search.."
      />
    </div>
  );
};

export default Input;
