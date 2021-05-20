const List = (props) => {
  return (
    <>
      {props.list.map((movieList, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movieList.Poster} key={movieList.imdbID}></img>
        </div>
      ))}
    </>
  );
};

export default List;
