import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

const SiteHeader = ({ history, loggedIn }, props) => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let menuOptions;

  loggedIn
    ? (menuOptions = [
        { label: "Home", path: "/home" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Favorites", path: "/movies/favorites" },
        { label: "Top Rated", path: "/movies/topRatedMovies" },
        { label: "PlayList", path: "/movies/playlist" },
        { label: "Logout", path: "/" },
      ])
    : (menuOptions = []);

  const handleMenuSelect = (pageURL) => {
    history.push(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem("user");
    props.setUserState();
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Explore movies and TV shows
          </Typography>
          {auth && (
            <div>
              {isMobile ? (
                <>
                  <IconButton
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {menuOptions.map((opt) => (
                      <MenuItem
                        key={opt.label}
                        onClick={() => handleMenuSelect(opt.path)}
                      >
                        {opt.label}
                      </MenuItem>
                    ))}
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  {menuOptions.map((opt) => (
                    <Button
                      key={opt.label}
                      color="inherit"
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </Button>
                  ))}
                </>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default withRouter(SiteHeader);
