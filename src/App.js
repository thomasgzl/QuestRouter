import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavLink exact to="/" activeClassName="selected"> <h3>Home</h3> </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> <h3>Contact</h3> </NavLink>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
        </div>
    );
}
}

export default App;