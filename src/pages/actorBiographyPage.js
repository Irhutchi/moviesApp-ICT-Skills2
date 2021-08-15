import React from 'react'
import { withRouter } from 'react-router-dom'
import { getActor } from '../api/tmdb-api';
import ActorBio from '../components/actorBio'
import Spinner from '../components/spinner'
import { useQuery } from 'react-query';

const ActorBiographyPage = (props) => {
   //const id allows the component to extract the actor id from the browser's parameterized URL address
  const { id } = props.match.params;

  const { data: actor, error, isLoading, isError } = useQuery(
   ["actor", { id: id }],
   getActor
 );

 if (isLoading) {
    return <Spinner />
  }
  if(isError) {
    return <h1>{error.message}</h1>
  }
  

   return (
      <>
      {actor ? (
          <>
              <ActorBio actor={actor} />
          </>
      ) : (
          <p>Waiting for actor details</p>
      )}
  </>
   );
  
}

export default withRouter(ActorBiographyPage);
