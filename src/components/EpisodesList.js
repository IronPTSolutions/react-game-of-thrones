import React from 'react'
import Episode from './Episode';

const EpisodesList = (props) => {
  const list = props.episodes.map((episode, i) => (
    <div className="col-4 mb-4" key={i}>
      <Episode episode={episode} addToFavourite={props.addToFavourite}/>
    </div>
  ))

  return (
    <div className="EpisodesList">
      <h4>All episodes</h4>

      <div className="row">
        {list}        
      </div>
    </div>
  );
}

export default EpisodesList
