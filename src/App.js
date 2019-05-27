import React, { Component } from 'react';
import Header from './components/misc/Header';
import Navbar from './components/misc/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import EpisodeDetails from './scenes/EpisodeDetails';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />

        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/episodes/:id" component={EpisodeDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
