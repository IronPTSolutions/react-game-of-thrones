import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import GotService from '../services/GotService'

class EpisodeDetails extends Component {
  state = {
    episode: {},
    shouldRedirect: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    GotService.getEpisode(id)
      .then(
        episode => this.setState({ episode }),
        error => {
          console.error(error);
          if (error.response && error.response.status === 404) {
            this.setState({ shouldRedirect: true })
          }
        }
      )
  }

  render() {
    const { episode, shouldRedirect } = this.state;
    const summary = episode.summary ? episode.summary.replace(/<p>/g, '').replace(/<\/p>/g, '') : '';
    const image = episode.image ? episode.image.original : this.props.defaultImage;
    return shouldRedirect ? 
      (<Redirect to="/" />) : 
      (
      <Fragment>
        <div className="row mb-3">
          <div className="col-xs-12 col-sm-4">
            <img src={image} className="img-fluid" alt={episode.name} />
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

EpisodeDetails.defaultProps = {
  defaultImage: 'https://via.placeholder.com/350x197'
}

export default EpisodeDetails;