import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './styles/base.css';
import Home from './scenes/Home/Home';
import NotFound from './components/PageNotFound/PageNotFound';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}

export default App;
