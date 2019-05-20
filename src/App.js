import React from 'react';
import Header from './components/misc/Header';
import EpisodesList from './components/EpisodesList';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <div className="row">
          <div className="col-9 p-4 bg-light border-right rounded">
            <EpisodesList/>
          </div>

          <div className="col-3 p-4">
            <Favourites/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
