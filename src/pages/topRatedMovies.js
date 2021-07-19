import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTopRatedMovies } from '../api/tmdb-api'
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
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
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => <LocalActivityIcon movie={movie} />}
    />    
  );
};

export default TopRatedMovies;