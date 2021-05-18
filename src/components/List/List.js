const List = (props) => {
  return (
    <>
      {props.mapList.map((data, index) => (
        <div>
          <h3>{data.Title}</h3>
          <img src={data.Poster} title={data.Title} key={data.imdbID}></img>
        </div>
      ))}
    </>
  );
};

export default List;
