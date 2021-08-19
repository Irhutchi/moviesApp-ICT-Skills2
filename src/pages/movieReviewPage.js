import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import SiteHeader from "../components/siteHeader";
const MovieReviewPage = (props) => {
  const { movie, review } = props.location.state;
  return (
    <>
      <SiteHeader loggedIn={true} />
      <PageTemplate movie={movie}>
        <MovieReview review={review} />
      </PageTemplate>
    </>
  );
};

export default withRouter(MovieReviewPage);
