import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import ActorCard from "../actorCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  youtube: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1.5),
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
// pass in a movie, credits and video props
const MovieDetails = ({ movie, credits, video }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  //const [video, setVideo] = useState();
  
  let castMembers = credits.cast;
  castMembers = castMembers.slice(0, 8);

  //let videos = video.id;

  const handleClick = (actor) => {
    history.push(`/actor/${actor.id}`);
  };

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="body1" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
         {/* use map func to loop over the genres array - display genre names  */}
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip
            label="Production Countries"
            className={classes.chip}
            color="primary"
          />
        </li>
         {/* use map func to loop over the production_countries array - display production countries */}
        {movie.production_countries.map((p) => (
          <li key={p.name}>
            <Chip label={p.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Grid container className={classes.root} spacing={2}>
        {/* use map func to loop over the actor array - display actor name */}
        {castMembers.map((actor) => (
          <Grid item key={actor.name} onClick={()=> handleClick(actor)} xs={12} sm={6} md={4} lg={3} xl={2}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
      {/*Parse the 'key' attribute from video json data and open movie trailer */}      
      <Button
        className={classes.youtube}
        variant="contained"
        startIcon={<YouTubeIcon />}
        color="secondary"
        href={`https://www.youtube.com/watch?v=${video.results[0].key}`} 
      >
        Watch the Trailer
      </Button>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
