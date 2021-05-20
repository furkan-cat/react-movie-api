const Input = (props) => {
  return (
    <div className="col-4">
      <input
        className="form-control"
        onChange={(event) => props.setSearchValue(event.target.value)}
        value={props.value}
        placeholder="Type to search.."
      />
    </div>
  );
};

export default Input;
