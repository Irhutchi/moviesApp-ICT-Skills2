import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTopRatedMovies } from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
/*
  The useQuery hook uses the second argument (getMovies) to perform the HTTP request; 
  The first argument is used as the cache entry key
*/

const TopRatedMovies = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('topRatedMovies', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const topRated = movies.filter((m) => m.topRated);
  localStorage.setItem("topRated", JSON.stringify(topRated));

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />    
  );
};

export default TopRatedMovies;