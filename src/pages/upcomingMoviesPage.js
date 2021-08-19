import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { makeStyles } from "@material-ui/core/styles";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import Pagination from "@material-ui/lab/Pagination";
import SiteHeader from "../components/siteHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const UpcomingMoviesPage = (props) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // useQuery uses the 2nd arg to perform HTTP, 1st arg is used as the cache entry key
  const { data, error, isLoading, isError } = useQuery(
    ["upcoming", { page: page }],
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const upcoming = movies.filter((m) => m.upcoming);
  localStorage.setItem("upcoming", JSON.stringify(upcoming));

  return (
    <>
    <SiteHeader loggedIn={true} />
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />;
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

export default UpcomingMoviesPage;
