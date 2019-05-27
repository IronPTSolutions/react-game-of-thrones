import React from 'react'
import { Link } from 'react-router-dom'

class Episode extends React.Component {
  state = {
    readMore: false
  }

  onClickReadMore = () => {
    this.setState({ readMore: !this.state.readMore })
  }

  render() {
    const { episode, isFavourite } = this.props
    
    const summaryLong = episode.summary.replace(/<p>/g, '').replace(/<\/p>/g, '')
    const summaryShort = summaryLong.slice(0, 50)

    const summary = this.state.readMore
      ? summaryLong
      : summaryShort
    
    const readText = this.state.readMore
      ? 'Read Less'
      : 'Read More' 

    return (
      <div className="Episode card">
        <Link to={`/episodes/${episode.id}`}><img src={episode.image.medium} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title">{episode.name}</h5>
            <h6 className="card-title">S0{episode.season} E{episode.number}</h6>
            <p className="card-text">
              {summary}
            </p>

            {!isFavourite && (
              <div className="d-flex justify-content-between">
                <a href="#"
                  className="card-link"
                  onClick={this.onClickReadMore}>
                  {readText}
                </a>

                <button
                  className="card-link btn btn-sm btn-primary"
                  onClick={() => { this.props.addToFavourite(episode) }}
                >
                  Favourite
                </button>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Episode
