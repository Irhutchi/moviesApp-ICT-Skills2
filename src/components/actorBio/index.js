import React from 'react'
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const ActorBio = ({history, actor}) => {
   return (
      <div>
         <Grid container>
            <Grid item xs={12} sm={6} md={3}>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>

            </Grid>

         </Grid>

      </div>
   );
}


export default withRouter(ActorBio);