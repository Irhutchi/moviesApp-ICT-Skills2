import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  
  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };
  return (
    <IconButton aria-label="add to must-watch" onClick={handleAddToPlaylist}>
        <PlaylistAddSharpIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
