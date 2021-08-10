import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Pagination from "@material-ui/lab/Pagination";
/*
  The useQuery hook uses the second argument (getMovies) to perform the HTTP request; 
  The first argument is used as the cache entry key
*/

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data, error, isLoading, isError } = useQuery(
    ["discover", { page: page }],
    getMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
      <div className={classes.root}>
        <Pagination
          count={10}
          onChange={handlePageChange}
          size="large"
          variant="outlined"
          color="secondary"
        />
      </div>
    </>
  );
};

export default HomePage;
