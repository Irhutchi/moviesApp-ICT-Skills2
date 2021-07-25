import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = (props) => {
 
  // useQuery uses the 2nd arg to perform HTTP, 1st arg is used as the cache entry key
    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
  
    // Redundant, but necessary to avoid app crashing.
    const upcoming = movies.filter(m => m.upcoming)
    localStorage.setItem('upcoming', JSON.stringify(upcoming))
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
        }}
      />    
    );
  };
  
  export default UpcomingMoviesPage;