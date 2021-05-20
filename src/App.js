import React, { useState, useEffect } from "react";

import InputHeader from "./components/InputHeader/InputHeader";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const getRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ba74b7c&`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) setList(responseJson.Search);
  };

  useEffect(() => {
    getRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center m-4">
        <InputHeader />
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          value={searchValue}
        />
      </div>
      <div className="row justify-content-center">
        <List list={list} />
      </div>
    </div>
  );
}

export default App;

// const [movies, setMovies] = useState([]);
// const [filteredInput, setFilteredInput] = useState([]);
// const [input, setInput] = useState("");

// useEffect((input) => {
//   fetch(`http://www.omdbapi.com/?s=${input}&apikey=ba74b7c&`)
//     .then((response) => response.json())
//     .then((response) => {
//       if (response.Search) setMovies(response.Search);
//     });
// });

// useEffect(
//   (input) => {
//     setFilteredInput(
//       movies.filter((movie) =>
//         movie.Title.toString().toLowerCase().includes(input)
//       )
//     );
//   },
//   [input]
// );

// react hooks best practices
// react function components best practices

// const changeHandler = (e) => {
//   if (e.target.value.length >= 4) {
//     fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=ba74b7c&`)
//     .then((response) => response.json())
//     .then((response) => {
//      if (response.Search) setMovies(response.Search);
//       console.log(movies)
//     });
//   }
// };

// return (
//   <React.Fragment>
//     <Card>
//       <h2>Youtube Search API</h2>
//       <input type="text" onChange={changeHandler} />
//     </Card>
//     <List movies={movies} />
//   </React.Fragment>
// );

// const List = (props) => {
//   return (
//     <>
//       {Object.values(props.movies).map((movie, index) => (
//         <div>
//             <h3>{movie.Title}</h3>
//           <img src={movie.Poster} title={movie.Title} key={movie.imdbID}>
//         </div>
//       ))}
//     </>
//   );
// };
