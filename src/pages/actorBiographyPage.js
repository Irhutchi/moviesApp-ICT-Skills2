import React from 'react'
import { withRouter } from 'react-router-dom'
import ActorBio from '../components/actorBio'

const ActorBiographyPage = (props) => {
   return (
      <div>
         <ActorBio />
      </div>
   )
}

export default withRouter(ActorBiographyPage);
