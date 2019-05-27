import React, { Component, Fragment } from 'react'
import FilterSeason from './FilterSeason';
import EpisodesList from './EpisodesList';
import Favourites from './Favourites';
import SearchBar from './SearchBar';
import episodes from '../data/episodes.json'


class Home extends Component {
  state = {
    season: null,
    favouriteEpisodes: [],
    searchEpisodes: [...episodes]
  }

  addToFavourite = (episode) => {
    this.setState({
      favouriteEpisodes: [episode, ...this.state.favouriteEpisodes]
    })
  }

  filterSeason = (season) => {
    this.setState({ season })
  }

  handleSearchEpisodes = (text) => {
    this.setState({
      searchEpisodes: episodes.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  render() {
    const seasonEpisodes = this.state.searchEpisodes.filter(e => {
      return this.state.season === null || Number(this.state.season) === e.season
    })

    return (
      <Fragment>
        <FilterSeason onFilterSeason={this.filterSeason} />
        <SearchBar onSearch={this.handleSearchEpisodes} />

        <div className="row">
          <div className="col-9 p-4 bg-light border-right rounded">
            <EpisodesList episodes={seasonEpisodes} addToFavourite={this.addToFavourite} />
          </div>

          <div className="col-3 p-4">
            <Favourites episodes={this.state.favouriteEpisodes} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home