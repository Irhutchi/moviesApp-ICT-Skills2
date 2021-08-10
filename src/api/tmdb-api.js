export const getMovies = async ( args ) => {
   // eslint-disable-next-line no-unused-vars
   const [prefix, { page }] = args.queryKey;
   const response = await fetch(
     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
   );
   if (!response.ok) {
     throw new Error(response.json().message);
   }
   return response.json();
 };
  
export const getMovie = async ( args ) => {
  console.log(args);
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
export const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
  if(!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const getMovieImages = async ({queryKey}) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json.results);
      return json.results;
    });
};


export const getUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTopRatedMovies = async (args) => {
   // eslint-disable-next-line no-unused-vars
   const [prefix, { page }] = args.queryKey;
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    `&language=en-US&page=${page}`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getVoteAvgMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&vote_average.gte=2.0&vote_average.lte=8.0"
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
