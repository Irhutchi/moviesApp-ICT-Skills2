import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
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

const TopRatedMovies = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data, error, isLoading, isError } = useQuery(
    ["topRatedMovies", { page: page }],
    getTopRatedMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const topRated = movies.filter((m) => m.topRated);
  localStorage.setItem("topRated", JSON.stringify(topRated));

  return (
    <>
      <PageTemplate
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />;
        }}
      />
      );
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

export default TopRatedMovies;
