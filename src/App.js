import React from 'react';
import Header from './components/misc/Header';
import EpisodesList from './components/EpisodesList';
import Favourites from './components/Favourites';
import episodes from './data/episodes.json'
import FilterSeason from './components/FilterSeason';

class App extends React.Component {
  state = {
    season: null,
    favouriteEpisodes: []
  }

  addToFavourite = (episode) => {
    this.setState({
      favouriteEpisodes: [episode, ...this.state.favouriteEpisodes]
    })
  }

  filterSeason = (season) => {
    this.setState({ season })
  }

  render() {
    const seasonEpisodes = episodes.filter(e => {
      return this.state.season === null || Number(this.state.season) === e.season
    })

    return (
      <div className="App">
        <Header />

        <main className="container">
          <FilterSeason onFilterSeason={this.filterSeason}/>

          <div className="row">
            <div className="col-9 p-4 bg-light border-right rounded">
              <EpisodesList episodes={seasonEpisodes} addToFavourite={this.addToFavourite}/>
            </div>

            <div className="col-3 p-4">
              <Favourites episodes={this.state.favouriteEpisodes}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
