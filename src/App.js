import React, { Component } from 'react';
import Header from './components/misc/Header';
import Navbar from './components/misc/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />

        <main className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
