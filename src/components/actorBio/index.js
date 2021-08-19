import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import ActorCard from "../actorCard";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    justifyContent: "center",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const ActorBio = ({ history, actor }) => {
  const classes = useStyles();

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        textAlign: "left",
        width: "40%",
        display: "left",
      }}
    />
  );

  return (
    <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <ActorCard actor={actor} />
          <Typography style={{ padding: "15px" }} variant="h4" component="h3">
            Personal Info
            <hr style={{ borderTop: "5px solid #f50057", width: "50" }} />
            </Typography>
            <List
              component="nav"
              className={classes.root}
              aria-label="mailbox folders"
            >
              <ListItem button divider>
                <ListItemText 
                primary="Brithday"
                secondary={actor.birthday} />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText 
                primary="Place of Birth:"
                 secondary={actor.place_of_birth} />
              </ListItem>
              <Divider light />
              <ListItem button divider>
                <ListItemText primary="Known for:"
                   secondary={actor.known_for_department} />
              </ListItem>
              <Divider light />
              <ListItem button divider>
                <ListItemText 
                primary="Popularity:"
                secondary={actor.popularity}  />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Also Known As:"
                secondary={actor.also_known_as}  />
              </ListItem>
              <ColoredLine color="#f50057" />
            </List>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h4" component="h3">
            Biography
          </Typography>
          <Typography variant="body1" component="p">
            {actor.biography}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(ActorBio);
