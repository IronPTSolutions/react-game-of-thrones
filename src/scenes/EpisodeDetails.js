import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import episodes from '../data/episodes.json'

class EpisodeDetails extends Component {
  state = {
    episode: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    const episode = episodes.find(episode => episode.id === Number(id));
    this.setState({ episode })
  }

  render() {
    console.log(this.state.episode);
    const { episode } = this.state;
    const summary = episode.summary ? episode.summary.replace(/<p>/g, '').replace(/<\/p>/g, '') : '';
    const image = episode.image ? episode.image.original : 'https://via.placeholder.com/350x150';
    return (
      <Fragment>
        <div className="row mb-3">
          <div className="col-xs-12 col-sm-4">
            <img src={image} class="img-fluid" alt={episode.name} />
          </div>
          <div className="col-xs-12 col-sm-8">
            <h1>{ episode.name }</h1>
            <p>{ summary }</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/">Back to list</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EpisodeDetails;