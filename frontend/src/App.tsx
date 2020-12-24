import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
