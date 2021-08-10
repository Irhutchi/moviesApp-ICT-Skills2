import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
});

//onChange={(e) => handlePageChange(e)}

const PaginationFilter = ( ) => {
   const [setPage] = useState();
   const classes = useStyles();

   const handlePageChange = (event, value) => {
      setPage(value);
    };


  return (
    <div className={classes.root}>
      <Pagination
        variant="outlined"
        shape="rounded"
        size="large"
        color="secondary"
        count={10}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default PaginationFilter;
