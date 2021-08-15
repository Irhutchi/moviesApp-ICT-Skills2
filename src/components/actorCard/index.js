import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  card: { maxWidth: 274 },
  media: { height: 300 },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ActorCard({ actor }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          title={
            <Typography variant="H5" component="p">
              {actor.name}
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : img
          }
        />
        <CardContent>
            <Typography 
            variant="subtitle1" 
            component="p"
            color="Primary"
            >
            {actor.character}
            </Typography>          
        </CardContent>
      </Card>
    </div>
  );
}
