import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuCard from "./MenuCard";

function Menu() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=e8da7f9a`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.Search);
      });
  };
  const toggledSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-dark justify-content-between">
          <p className="navbar-brand text-warning">Movie Recommender</p>
          <form className="form-inline" onSubmit={fetchData}>
            <input
              className="inputField"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={toggledSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>

      <div className="container my-3">
        <div className="row">
          {movies.length?
          movies.map((curElem) => {
            return (
              <>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <img src={curElem.Poster}></img>
                      <h5 className="card-title">Title: {curElem.Title}</h5>
                      <p className="card-text">Year: {curElem.Year}</p>

                      <p class="font-weight-light">Type: {curElem.Type}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          }):<p className="findMovies">Search Movies!</p>}
        </div>
      </div>
    </>
  );
}

export default Menu;
