import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import Grid from "@material-ui/core/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

function MovieCard({ movie, action }) {
    const classes = useStyles();
    const { favorites } = useContext(MoviesContext);
    const { playlist } = useContext(MoviesContext);
    
    if (favorites.find((id) => id === movie.id)) {
        movie.favorite = true;
    } else {
        movie.favorite = false;
    }
    if (playlist.find((id) => id === movie.id)) {
        movie.playlist = true;
    } else {
        movie.playlist = false;
    }

    const checkAvatar = (favoriteStatus, playlistStatus) => {
        if (favoriteStatus) {
            return (
                <Avatar className={classes.avatar}>
                    <FavoriteIcon />
                </Avatar>
            );
        } else if (playlistStatus) {
            return (
                <Avatar className={classes.avatar}>
                    <PlaylistAddSharpIcon />
                </Avatar>
            );
        }
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                avatar={checkAvatar(movie.favorite, movie.playlist)}
                title={
                    <Typography variant="h5" component="p">
                        {movie.title}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {movie.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {movie.vote_average}{" "}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {`vote count: ${movie.vote_count}`}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                {action(movie)}
                <Link to={`/movies/${movie.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
export default MovieCard;