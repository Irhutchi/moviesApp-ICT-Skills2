
import React from "react";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { getMovieCredits } from "../api/tmdb-api";

const MovieDetailsPage = (props) => {
  //const id allows the component to extract the movie id from the browser's parameterized URL address
  const { id } = props.match.params;

   const credits = useQuery(["credits", { id: id }],getMovieCredits);

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }], getMovie,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  //In the below code the children prop will be bound to: <MovieDetails movie={movie} />
  return (
    <>
      {movie && credits ? (
        <>
          <PageTemplate movie={movie} credits={credits.data}>
            <MovieDetails movie={movie} credits={credits.data}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);


