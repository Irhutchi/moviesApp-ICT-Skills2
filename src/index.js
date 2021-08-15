import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from "./components/siteHeader";
import LoginPage from "./pages/loginPage";
import SignUpForm from "./components/signUpForm";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import AuthenticationPage from "./pages/authenticationPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import movieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import TopRatedMovies from "./pages/topRatedMovies";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import ActorBiographyPage from "./pages/actorBiographyPage";

/* Query Client will manage the cache in the browser */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

/* note:
      whenever routing configuration changes are made you must restart the development server.
*/
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <SiteHeader />
        <MoviesContextProvider>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={movieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/topRatedMovies" component={TopRatedMovies} />
          <Route exact path="/movies/playlist" component={PlaylistMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/actor/:id" component={ActorBiographyPage} />

          <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
